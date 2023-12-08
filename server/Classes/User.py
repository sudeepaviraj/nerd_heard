from .LocalDatabase import Connection
import jwt


def FormatUser(user):
    
    formatted_user = {
        "name": user[1],
        "reg": user[3],
        "index": user[2],
    }
    return formatted_user


def GenarateSecret(user):
    secret = jwt.encode(
        user, "EBEAEDF476C325D2D69DB5ED3FD3A", algorithm="HS256")
    return secret


class User:
    def __init__(self) -> None:
        self.con = Connection()

    def Login(self, reg_no, index):
        
        user = self.con.Fetch(
            f"SELECT * FROM user WHERE reg_no = '{reg_no.upper()}' AND index_no = '{index.upper()}' ")
        if (len(user) == 0):
            return {"auth": "failed", "msg": "wrong credintials"}, 403
        elif (len(user) == 1):
            return {"auth": "sucess", "msg": FormatUser(user[0]), "secret": GenarateSecret(FormatUser(user[0]))}, 200
        elif (len(user) > 1):
            return {"auth": "error", "msg": "internal server error"}, 500

    def MarkAttendance(self):
        pass
