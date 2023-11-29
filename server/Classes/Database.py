import sqlite3
con = sqlite3.connect("users.db")
cur = con.cursor()
cur.execute("""INSERT INTO user(user_name,index_no,reg_no,lecture_group,lab_group) VALUES ("ABEKOON A M S V","ICT/2/801","TE110426","I1","I1S")""")
con.commit()