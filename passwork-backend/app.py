from flask import jsonify
from flask_sqlalchemy import SQLAlchemy
from model import db, Folders, Passwords
from config import create_app

app = create_app()
db.init_app(app)


with app.app_context():
    db.create_all()  
    db.session.commit()

@app.route('/folders', methods = ['GET'])
def get_folders():
    folder = []
    folder_list = db.session.query(Folders.id, Folders.fname, Folders.parent_id).all()
    for row in folder_list:
        folder.append(row._asdict())

    return jsonify(folder)


if __name__ == '__main__':
    app.run(debug=True)