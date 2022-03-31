import unittest

from flask import request
from flask import make_response
from flask import redirect
from flask import render_template
from flask import session

from app import create_app
from app.firestore_services import get_users
from app.firestore_services import get_to_dos
from flask_login import login_required

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
@login_required
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
    return render_template('hello.html',data=data,**extra_data)

def decorate(string):
    return f'<strong>{string}</strong>'

if __name__ == '__main__':
    app.run(debug=True)
