#imports for functionality
from flask import Flask, render_template, json, request, jsonify
import random
import numpy as np
import sys
#initialize app
app=Flask(__name__)
#base url
@app.route("/")
def UI():
    #p = "PATH_TO_INPUT_FILE"
    #data = []
    #with open(p,"r") as f:
    #for i in f.readlines():
    #    data.append(ast.literal_eval(i.strip()))
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
#loop back to here with password
@app.route("/checkPassword", methods=['POST'])
def validatePassword():
    check = request.json['password']
    #load in passwords
    passwordFile = open("notPasswords.txt","r")
    #loop through file
    for i in passwordFile.readlines():
        #debug
        print("Check "+i.strip()+" against "+check.strip(), file=sys.stderr)
        #if found
        if(i.strip() == check.strip()):
            #close file and send response
            passwordFile.close()
            return jsonify("password validation passed")
    #if not found, close file different response
    passwordFile.close()
    return jsonify("password validation failed")

#don't start the app in debug mode
#possibly what was wrong
if __name__ == "__main__":
    app.run(debug=True)
