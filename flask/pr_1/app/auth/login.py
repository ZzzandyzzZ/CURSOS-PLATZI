from flask import render_template
from flask import flash
from flask import session
from flask import url_for
from flask import redirect
from flask_login import login_user
from flask_login import current_user
from flask_login import login_required
from flask_login import logout_user
from werkzeug.security import generate_password_hash

from app.forms import LoginForm
from app.firestore_services import get_user
from app.firestore_services import user_put
from app.models import UserData
from app.models import UserModel

from . import auth

@auth.route('/')
def home():
    return 'Hello from auth'

@auth.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    login_form = LoginForm()
    context = {
        'login_form': login_form,
    }
    if login_form.validate_on_submit():
        username = login_form.username.data
        password = login_form.password.data
        user_doc = get_user(username)
        if user_doc.to_dict() is not None:
            db_password = user_doc.to_dict()['password']
            if db_password == password:
                user_data = UserData(username, password)
                user_model = UserModel(user_data)
                login_user(user_model)
                flash(f'Login Correcto!!!', 'success')
                return redirect(url_for('hello'))
            else:
                flash(f'La informacion no coincide!!!', 'danger')
        flash(f'Usuario no encontrado!!!', 'danger')
        return redirect(url_for('index'))
    return render_template('login.html', **context)

@auth.route('logout')
@login_required
def logout():
    logout_user()
    flash('Regresa pronto', 'success')
    return redirect(url_for('auth.login'))

@auth.route('signup', methods=['GET', 'POST'])
def signup():
    signup_form = LoginForm()
    context = {
        'signup_form': signup_form,
    }
    if signup_form.validate_on_submit():
        username = signup_form.username.data
        password = signup_form.password.data
        user_doc = get_user(username)
        if user_doc.to_dict() is None:
            pass_hash = generate_password_hash(password)
            user_data = UserData(username, pass_hash)
            user_put(user_data)
            user_model = UserModel(user_data)
            login_user(user_model)
            flash('Bienvenido!!', 'success')
            return redirect(url_for('hello'))
        else:
            flash('El usuario ya existe', 'danger')
    return render_template('signup.html', **context)
