import sqlite3
class Connection:
    connection = sqlite3.connect("users.db",check_same_thread=False)
    curser = connection.cursor()
    def __init__(self) -> None:
        pass
        
    def Insert(self,sql:str)->bool:
        self.curser.execute(sql)
        try:
            self.connection.commit()
            return True
        except Exception as e:
            return False   
    
    def Fetch(self,sql:str):
        res = self.curser.execute(sql)
        try:
            return res.fetchall()
        except Exception as e:
            return e
    