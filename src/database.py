import pymysql
from DB_CONN import db_conn

conn = pymysql.connect(
    host=db_conn['host'],
    user=db_conn['user'],
    password=db_conn['password'],
    port=db_conn['port'],
    database=db_conn['database']
)

with conn:
    with conn.cursor() as cur:
        cur.execute("SELECT VERSION()")

        version = cur.fetchone()

        print("Database version: {}".format(version[0]))
