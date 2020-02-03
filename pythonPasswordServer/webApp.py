#imports for functionality
from flask import Flask, render_template, json, request, jsonify
import random
import numpy as np
#initialize app
app=Flask(__name__)
#base url
@app.route("/")
def UI():
    #show the user the password generator
    return render_template("passwordGenerator.html")
@app.route("/generatePassword")
def generatePassword():
    characters = "abcdefghijklmnopqrstuvwxyz01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    password =  "".join(random.sample(characters,random.randrange(10,50)))
    passwordFile = open("notPasswords.txt","a")
    passwordFile.write(password+"\n")
    passwordFile.close()
    return jsonify(password)
@app.route("/checkPassword", methods=['POST'])
def validatePassword():
    #load in passwords
    check = request.data
    print(check)
    passwordFile = open("notPasswords.txt","r")
    #loop through file
    for i in passwordFile.readlines():
        #compare to passwords in file
        if(i.strip() == check.strip()):
            #close file and send response
            passwordFile.close()
            return 'validation passed', 200
    #if not found, close file different response
    passwordFile.close()
    return 'validation failed', 404

#don't start the app in debug mode
#possibly what was wrong
if __name__ == "__main__":
    app.run(host='0.0.0.0')
