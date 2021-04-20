import pymysql

conn = pymysql.connect(
    host='eyw6324oty5fsovx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user='sukn3ydi0q6517dx',
    password='gegyoqxnv18e28k3',
    port=3306,
    database='nunae2j7ki7ne8si'
)

with conn:
    cur = conn.cursor()
    cur.execute("SELECT VERSION()")

    version = cur.fetchone()

    print("Database version: {}".format(version[0]))
