import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

credentials = credentials.ApplicationDefault()
firebase_admin.initialize_app(credentials)
# firebase_admin.initialize_app()

db = firestore.client()

def get_users():
    return db.collection('user').get()

def get_to_dos(username):
    return db.collection('user').document(username).collection('to_do').get()