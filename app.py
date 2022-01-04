from re import T
from flask import Flask, render_template, request
import json
import paramiko


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

def upload_to_server(localpath : str, name : str) :
    if not ser :
        raise NotServerMode("WBC not recognized as online server instance")
        
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect(log['host'], log['port'], log['username'], log['password'])

    transfer = ssh.open_sftp()
    path = f'/home/ufqkcos/www/{name}.{localpath[-3]:}'
    transfer.put(localpath, path)

    transfer.close()
    ssh.close()

def create_opponent(data_dict : dict, name : str):
    file = open(f'static/data/opponent/{name}.json', 'x')
    print(data_dict)
    n_object = {}
    n_object['name'] = data_dict['nameInput']
    n_object['type'] = "opponent"
    n_object['life'] = data_dict['lifeInput']
    n_object['defense'] = data_dict['defenseInput']
    n_object['maxLife'] = data_dict['lifeInput']
    n_object['theme'] = data_dict['themeInput'][:-4]
    json.dump(n_object, file)
    file.close()
        


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