import re
from flask import Flask, render_template, request


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/battle', methods = ['GET','POST'])
def battle():
    print(request.form)
    return render_template('battle.html')