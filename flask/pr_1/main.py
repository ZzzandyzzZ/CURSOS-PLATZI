from flask import Flask
from flask import request
from flask import make_response
from flask import redirect
from flask import render_template
from flask import session
from flask_bootstrap import Bootstrap

# __name__ Nombre del archivo
app = Flask(__name__)
app.config['ENV'] = 'development'
app.config['SECRET_KEY'] = 'ANDY'
bootstrap = Bootstrap(app)
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

@app.route('/hello')
def hello():
    user_ip = request.session.get('user_ip')
    #user_ip = request.cookies.get('user_ip')
    data = {
        'user_ip': user_ip,
        'tittle':"TITULO PRINCIPAL",
    }
    extra_data = {
        'subtittle':' SUBTITULO 1',
        'decorate':decorate
    }
    return render_template('hello.html',data=data,**extra_data)

def decorate(string):
    return f'<strong>{string}</strong>'

if __name__ == '__main__':
    app.run(debug=True)