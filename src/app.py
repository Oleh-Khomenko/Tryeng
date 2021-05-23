from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
from database import db_connect, get_all, insertUser
import jwt
import datetime
from mailing import sendEmail
from jwt_secret_key import SECRET

app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = SECRET

DATA_BASE = db_connect()


@app.route('/login', methods=['POST'])
def loginForm():
    try:
        data = request.get_json(force=True)
        db_data = list(map(list, get_all(DATA_BASE, 'users')))

        login = data['email']
        password = data['password']

        print('#' * 10)
        print(login)
        print(password)
        print(db_data)
        print('#' * 10)

        if [login, password] in db_data:
            token = jwt.encode({'login': login, 'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)},
                               app.config['SECRET_KEY'])

            print(jsonify({'token': token}))
            return jsonify({'token': token})

        return make_response('Could not verify!', 401)

    except Exception as e:
        print(e)
        return make_response('Could not verify!', 401)


@app.route('/register', methods=['POST'])
def registerForm():
    try:
        data = request.get_json(force=True)

        insertUser(DATA_BASE, data)

        return data
    except Exception as e:
        return {'data': e}


@app.route('/checkTestsAnswers', methods=['POST'])
def checkTestsAnswers():
    data = dict(request.get_json(force=True)).popitem()

    test, answers = data
    db_data = list(map(lambda el: list(el)[1], get_all(DATA_BASE, test)))
    print(db_data)
    print(answers)

    resp = len([1 for i in range(len(answers)) if answers[i] == db_data[i]])
    print(resp)

    return {'correct': str(resp)}


@app.route('/feedback', methods=['POST'])
def feedback():
    try:
        data = request.get_json(force=True)

        subject = data['email']
        body = data['text']

        sendEmail(subject, body)

        return {'status': 'ok'}
    except Exception as e:
        print(e)
        return {'status': 'fail'}


if __name__ == '__main__':
    app.run(debug=True)
    DATA_BASE.close()
