from flask import render_template
from flask import flash
from flask import session
from flask import url_for
from flask import redirect

from app.forms import LoginForm

from . import auth

@auth.route('/')
def home():
    return 'Hello from auth'

@auth.route('/login')
def login():
    login_form = LoginForm()
    context = {
        'login_form': login_form,
    }
    if login_form.validate_on_submit():
        username = login_form.username.data
        session['username'] = username
        flash(f'Nombre registrado {username}', 'danger')
        return redirect(url_for('index'))
    return render_template('login.html', **context)