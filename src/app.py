from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json(force=True)
    if data['login'] and data['password']:
        return {'data': 'ok'}
    return {'data': 'fail'}


if __name__ == '__main__':
    app.run(debug=True)
