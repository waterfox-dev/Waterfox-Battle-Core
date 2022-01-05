from re import T
from flask import Flask, render_template, request
import json

#Variables
app = Flask(__name__)
ver = '0.3.5'
dev = True
ser = False

app.config['MAX_CONTENT_PATH'] = 500000

#Try to run as server instance
try :
    with open('private/serverLog.json', 'r', encoding='utf8') as log :
        log = dict(json.load(log))
        ser = True
except FileNotFoundError :
    pass

#Classes 
class CodeNotFound(Exception):
    pass

class NotServerMode(Exception):
    pass

#Functions
def get_path(code : str) :
    with open('static/data/register.json', 'r', encoding='utf8') as register :
        register = dict(json.load(register))
    
    for key in register.keys():
        if key == code :
            return(register[key]["opponent"], register[key]["player"], register[key]["name"])
    raise CodeNotFound(f'{code} not found in static/data/register.json')

def create_opponent(data_dict : dict, name : str):
    data_dict = serialize(data_dict)
    file = open(f'static/data/opponent/{name}.json', 'x')
    
    n_object = {}
    n_object['name'] = data_dict['nameInput']
    n_object['type'] = "opponent"
    n_object['life'] = int(data_dict['lifeInput'])
    n_object['defense'] = int(data_dict['defenseInput'])
    n_object['maxLife'] = int(data_dict['lifeInput'])    
    n_object['attacks'] = data_dict['attacks']
    n_object['theme'] = data_dict['themeInput'][:-4]
    n_object['sprite'] = f"../static/images/{data_dict['fileName']}.png"
    
    json.dump(n_object, file)
    file.close()

    with open('static/data/register.json', 'r', encoding='utf8') as r_file :
        print(data_dict)
        r_file = json.load(r_file)
        r_file[data_dict['publicCode']] = {
            'opponent' : f"../static/data/opponent/{data_dict['fileName']}.json",
            "player" : "../static/data/player/testPlayer.json", 
            "name" : data_dict['nameInput']
        }

        with open('static/data/register.json', 'w', encoding='utf8') as w_file :
            json.dump(r_file, w_file)
    

def serialize(data_dict : dict):
    data_dict['attacks'] = []
    current = 0
    for key in data_dict.keys() :
        if 'attackName' in key :
            current += 1
            data_dict['attacks'].append(
                {"name" : data_dict[f"attackName{current}"], 
                "description" : data_dict[f"attackDescription{current}"],
                "attack" : int(data_dict[f"attackPoint{current}"]), 
                "precision" : int(data_dict[f"precisionPoint{current}"])
                }
            )
    return data_dict
            


#Router
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/battle', methods = ['GET','POST'])
def battle():
    try :
        t_data = get_path(dict(request.form)['code'])
        return render_template('battle.html', opponent = t_data[0], player = t_data[1], opponentName = t_data[2])
    except CodeNotFound :
        return render_template('index.html', message = 'Code Not Found')
    
@app.route('/creator')
def creator():
    return render_template('creator.html')

@app.route('/creator_statement', methods = ['GET', 'POST'])
def creator_statement():
    
   result      = dict(request.form)
   theme_file  = request.files['themeInput']
   sprite_file = request.files['spriteInput']
   
   result['themeInput'] = theme_file.filename
   
   theme_file.save(f"static/musics/{result['fileName']}.ogg")
   sprite_file.save(f"static/images/{result['fileName']}.png")
   
   create_opponent(result, result['fileName'])
   
   return render_template('index.html')

app.run()
