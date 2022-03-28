import unittest

from flask import request
from flask import make_response
from flask import redirect
from flask import render_template
from flask import session

from app import create_app
from app.firestore_services import get_users
from app.firestore_services import get_to_dos

# __name__ Nombre del archivo
app = create_app()

@app.cli.command()
def test():
    tests = unittest.TestLoader().discover('tests')
    unittest.TextTestRunner().run(tests)

@app.errorhandler(404)
def not_found(error):
    return render_template('404.html', error=error)

@app.route('/')
def index():
    user_ip = request.remote_addr
    response = make_response(redirect('/hello'))
    session['user_ip'] = user_ip
    #response.set_cookie('user_ip', user_ip)
    return response

@app.route('/hello', methods=['GET'])
def hello():
    user_ip = session.get('user_ip')
    username = session.get('username')
    #user_ip = request.cookies.get('user_ip')
    data = {
        'user_ip': user_ip,
        'tittle':"BIENVENIDO",
    }
    extra_data = {
        'subtittle': 'Usuario',
        'decorate': decorate,
        'to_dos': get_to_dos(username),
        'username': username,
    }
    users = get_users()
    # for user in users:
    #     print(user.to_dict())
    #     print(user.id)
    #     print(user.to_dict()['password'])
    #     print(get_to_dos(user.id))
    return render_template('hello.html',data=data,**extra_data)

def decorate(string):
    return f'<strong>{string}</strong>'

if __name__ == '__main__':
    app.run(debug=True)
