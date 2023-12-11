from Classes import LocalDatabase
from Classes import User
from flask import Flask, request
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app)
import requests
import datetime

conn = LocalDatabase.Connection()


@app.post("/login")
def login():
    formdata = request.get_json()
    user = User.User()
    login = user.Login(formdata["reg_no"], formdata["index_no"])
    return login


@app.post("/verifyCapcha")
def capcha():
    token = request.get_json()
    stat = requests.post(f"https://www.google.com/recaptcha/api/siteverify?secret=6LfUMSspAAAAAJjXr7qcr89CzyahjMFLNRrkuB08&response={token['token']}").content
    return stat


@app.post("/lecture")
def lecture():
    data = request.get_json()
    print(data)
    try:
        result = conn.Fetch(
            f"SELECT idlecture,name,subject FROM lecture,instructor WHERE lecture.idinstructor = instructor.idinstructor AND lecture.idlecture = '{data['id']}'")
        if (len(result) > 0):
            return {'status': "ok", "data": result[0]}, 200
        else:
            return {'status': "not_found", "data": None}, 404
    except Exception as e:
        return e
@app.post("/markAttendance")
def attendance():
    data = request.get_json()
    status = conn.Insert(f"INSERT INTO student_attendance(idlecture,iduser,timestamp) VALUES ({data['lec']},{data['usr']},'{datetime.datetime.now()}')")
    return status

if __name__ == '__main__':
    app.run()
