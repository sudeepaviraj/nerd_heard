from cryptography.fernet import Fernet

key = Fernet(b'jpWloTmGpRvjCkB0hvyUDFDx1g4_F0s9uSMrUbNFwgo=')

class Key:
    def __init__(self) -> None:
        pass
    def Encrypt(self,text:str) -> str:
        return key.encrypt(text.encode())
    def Decrypt(self,text:str)-> str:
        return key.decrypt(text.encode())