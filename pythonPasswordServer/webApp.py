#imports for functionality
from flask import Flask, render_template, json, request, jsonify
import random

#initialize app
app=Flask(__name__)
#base url
@app.route("/")
def UI():
    return render_template("passwordGenerator.html")
@app.route("/generatePassword")
def generatePassword():
    characters = "abcdefghijklmnopqrstuvwxyz01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    password =  "".join(random.sample(characters,random.randrange(10,50)))
    passwordFile = open("notPasswords.txt","a")
    passwordFile.write(password+"\n")
    passwordFile.close()
    return jsonify(password)
#don't start the app in debug mode

#for the java server to validate
@app.route("/checkPassword",methods=['POST'])
def validatePassword():
    #print (request.json['password'])
    return request.json

#don't start the app in debug mode
#possibly what was wrong
if __name__ == "__main__":
    app.run(debug=True)
