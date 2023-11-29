from flask import Flask,request
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app)
import json
from decouple import config
from Classes import Key

Farnet = Key.Key()

@app.route('/',methods=["POST","GET"])
def hello_world():
    print(request.path)
    return "hi"

@app.post("/login")
def login():
    formdata = json.loads(request.get_data())
    return Farnet.Encrypt("fhgfg")

if __name__ == '__main__':
    app.run()