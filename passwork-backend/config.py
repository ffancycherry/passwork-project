from flask import Flask
 
def create_app():
    app = Flask(__name__)
    app.config['JSON_AS_ASCII'] = False
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:3672@localhost:5432/pass_project'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    return app