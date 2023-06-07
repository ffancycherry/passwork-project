#создание таблиц в бд
from flask_sqlalchemy import SQLAlchemy
from config import create_app

 
db = SQLAlchemy()

class Folders(db.Model):
    __tablename__ = 'folders'
 
    id = db.Column(db.Integer, primary_key=True)
    fname = db.Column(db.String(), nullable=False)
    parent_id = db.Column(db.Integer, nullable=False)
   # user_id= db.Column(db.Integer, nullable=False)
   # passwords = db.relationship('Passwords', backref='folders')
 
    def __init__(self, fname,parent_id):
        self.fname = fname
        self.parent_id = parent_id
 
    def __repr__(self):
        return f'{self.id}'
    
class Passwords(db.Model):
    __tablename__ = 'passwords'
 
    id = db.Column(db.Integer, primary_key=True)
    pname = db.Column(db.String(), nullable=False)
    plogin= db.Column(db.String(), nullable=False)
    ppass = db.Column(db.String(), nullable=False)
    url = db.Column(db.String())
    folder_id = db.Column(db.Integer, db.ForeignKey('folders.id'))
    folder = db.relationship('Folders', backref='passwords')

 
    def __init__(self, pname, plogin, ppass, url, folder_id):
        self.pname = pname
        self.plogin = plogin
        self.ppass = ppass
        self.url = url
        self.folder_id = folder_id
 
    def __repr__(self):
        return f'{self.id}'
 

