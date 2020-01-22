#imports for functionality
from flask import Flask, render_template, json, request, jsonify

#initialize app
app=Flask(__name__)
#base url
@app.route("/")
def UI():
    return render_template("passwordGenerator.html")
@app.route("/generatePassword")
def generatePassword():
    return jsonify(int(2))
#start the web app in debug mode
if __name__ == "__main__":
    app.run(debug = True)