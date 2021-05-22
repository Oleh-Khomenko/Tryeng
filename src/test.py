from database import db_connect

conn = db_connect()

with conn:
    with conn.cursor() as cur:
        cur.execute("select * from users")

        print(list(map(list, cur)))

