from flask import Flask,request

app = Flask(__name__)


@app.route('/',methods=["POST","GET"])
def hello_world():
    print(request.path)
    return "hi"

@app.post("/login")
def login():
    return "Login"

if __name__ == '__main__':
    app.run()