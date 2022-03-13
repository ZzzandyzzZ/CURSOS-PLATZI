from flask import Flask
from flask import request
from flask import make_response
from flask import redirect
from flask import render_template
from flask import session
from flask import url_for
from flask_bootstrap import Bootstrap
from flask_wtf import FlaskForm
from wtforms.fields import StringField, PasswordField
from wtforms.fields import SubmitField
from wtforms.validators import DataRequired

# __name__ Nombre del archivo
app = Flask(__name__)
app.config['ENV'] = 'development'
app.config['SECRET_KEY'] = 'ANDY'
bootstrap = Bootstrap(app)

class LoginForm(FlaskForm):
    username = StringField('Nombre de usuario', validators=[DataRequired()])
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Enviar')

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

@app.route('/hello', methods=['GET', 'POST'])
def hello():
    user_ip = session.get('user_ip')
    login_form = LoginForm()
    username = session.get('username')
    print(user_ip)
    #user_ip = request.cookies.get('user_ip')
    data = {
        'user_ip': user_ip,
        'tittle':"BIENVENIDO",
    }
    extra_data = {
        'subtittle': 'Usuario',
        'decorate':decorate,
        'login_form':LoginForm(),
        'username': username,
    }
    if login_form.validate_on_submit():
        username = login_form.username.data
        session['username'] = username
        return redirect(url_for('index'))
    return render_template('hello.html',data=data,**extra_data)

def decorate(string):
    return f'<strong>{string}</strong>'

if __name__ == '__main__':
    app.run(debug=True)
