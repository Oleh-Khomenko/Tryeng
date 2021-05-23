import pymysql
from DB_CONN import db_conn


def db_connect():
    return pymysql.connect(
        host=db_conn['host'],
        user=db_conn['user'],
        password=db_conn['password'],
        port=db_conn['port'],
        database=db_conn['database']
    )


def get_all(db, table):
    with db.cursor() as cur:
        cur.execute(f"select * from {table}")
        return list(cur)


def insertUser(db, data):
    try:
        with db.cursor() as cur:
            email = data['email']
            password = data['password']
            cur.execute(f"""insert into users(email, password) values("{email}", "{password}")""")
            db.commit()
        return 'ok'
    except Exception as e:
        return str(e)


def deleteUser(db, data):
    try:
        with db.cursor() as cur:
            email = data['email']
            cur.execute(f"""DELETE FROM users WHERE email='{email}'""")
            db.commit()
        return 'ok'
    except Exception as e:
        return str(e)
