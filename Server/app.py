from flask import Flask, render_template
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import os


app = Flask(__name__)

# Enable CORS from frontend connection
CORS(app,
     origins=['http://127.0.0.1:5173',
              'http://127.0.0.1:5173'
              ],
     supports_credentials = True)

#Ensure that the database exists
db_folder = os.path.join(os.getcwd(),"..", "Database")
os.makedirs(db_folder, exist_ok=True)

#Database path
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(db_folder, 'supply_chain.db')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

#Add import routes * here
from routes import *
if __name__ == '__main__':
    app.run(debug=True)