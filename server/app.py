from flask import Flask,request
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app)
import json
from decouple import config
from Classes import Key
from Classes import User
Farnet = Key.Key()

@app.route('/',methods=["POST","GET"])
def hello_world():
    print(request.path)
    return "hi"

@app.post("/login")
def login():
    formdata = json.loads(request.get_data())
    user = User.User()
    login = user.Login(formdata["reg_no"],formdata["index_no"])
    return login

if __name__ == '__main__':
    app.run()