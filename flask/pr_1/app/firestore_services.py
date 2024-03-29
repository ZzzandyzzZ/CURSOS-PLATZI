import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

credentials = credentials.ApplicationDefault()
firebase_admin.initialize_app(credentials)

db = firestore.client()

def get_users():
    return db.collection('user').get()

def get_user(user_id):
    return db.collection('user').document(user_id).get()

def user_put(user_data):
    user_ref = db.collection('user').document(user_data.username)
    user_ref.set({'password':user_data.password})

def get_to_dos(username):
    return db.collection('user').document(username).collection('to_do').get()

def put_to_do(username, description):
    to_do_ref = db.collection('user').document(username).collection('to_do')
    to_do_ref.add({'description': description, 'done':False})

def delete_to_do(username, to_do_id):
    to_do_ref = get_to_do_ref(username, to_do_id)
    #to_do_ref = db.collection('user').document(username).collection('to_do').document('to_do_id')
    to_do_ref.delete()

def update_to_do(username, to_do_id, done):
    to_do_ref = get_to_do_ref(username, to_do_id)
    to_do_ref.update({'done':not bool(done)})

def get_to_do_ref(username, to_do_id):
    return db.document(f'user/{username}/to_do/{to_do_id}')