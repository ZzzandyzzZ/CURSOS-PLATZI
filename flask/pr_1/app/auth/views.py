from flask import render_template

from app.forms import LoginForm

from . import auth

@auth.route('/')
def home():
    return 'Hello from auth'

@auth.route('/login')
def login():
    context = {
        'login_form': LoginForm(),
    }
    return render_template('login.html', **context)