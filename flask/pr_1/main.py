import unittest

from flask import request
from flask import make_response
from flask import redirect
from flask import render_template
from flask import session
from flask import flash
from flask import url_for

from app import create_app
from app.firestore_services import get_to_dos
from app.firestore_services import put_to_do
from app.firestore_services import delete_to_do
from app.firestore_services import update_to_do
from flask_login import login_required
from flask_login import current_user
from app.forms import ToDoForm
from app.forms import DeleteToDoForm
from app.forms import UpdateToDoForm


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

@app.route('/hello', methods=['GET', 'POST'])
@login_required
def hello():
    user_ip = session.get('user_ip')
    username = current_user.id
    to_do_form = ToDoForm()
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
        'to_do_form': to_do_form,
        'delete_to_do_form': DeleteToDoForm(),
        'update_to_do_form':UpdateToDoForm()
    }
    if to_do_form.validate_on_submit():
        put_to_do(username, to_do_form.description.data)
        flash('Tarea creada correctamente', 'success')
        return redirect(url_for('hello'))
    return render_template('hello.html',data=data,**extra_data)

def decorate(string):
    return f'<strong>{string}</strong>'

@app.route('/to_do/delete/<to_do_id>', methods=['POST'])
def delete(to_do_id):
    username = current_user.id
    delete_to_do(username, to_do_id)
    return redirect(url_for('hello'))

@app.route('/to_do/update/<to_do_id>/<int:done>', methods=['POST'])
def update(to_do_id, done):
    username = current_user.id
    update_to_do(username, to_do_id, done)
    return redirect(url_for('hello'))

if __name__ == '__main__':
    app.run(debug=True)
