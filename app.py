from flask import Flask, render_template


app = Flask(__name__)

@app.route('/battle')
def battle():
    return render_template('battle.html')