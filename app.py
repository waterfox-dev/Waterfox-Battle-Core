from re import T
from flask import Flask, render_template, request
import json

#Variables
app = Flask(__name__)
ver = '0.3'
dev = True

#Classes 
class CodeNotFound(Exception):
    pass

#Functions
def get_path(code : str) -> tuple :
    with open('static/data/register.json', 'r', encoding='utf8') as register :
        register = dict(json.load(register))
    
    for key in register.keys():
        if key == code :
            return(register[key]["opponent"], register[key]["player"], register[key]["name"])
    raise CodeNotFound(f'{code} not found in static/data/register.json')
        

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
   result = dict(request.form)
   print(result)
   return render_template('index.html')