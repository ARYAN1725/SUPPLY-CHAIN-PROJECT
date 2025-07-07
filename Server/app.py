from flask import Flask, render_template
from flask_cors import CORS
# import routes

app = Flask(__name__)

# Enable CORS from frontend connection
CORS(app,
     origins="http://localhost:5173",
     supports_credentials = True)

#Add import routes * here
from routes import *
if __name__ == '__main__':
    app.run(debug=True)