from flask import request, jsonify, session, send_file
from app import app
from models import *

#User Login API endpoint
@app.route("/api/UserLogin", methods=["POST"])
def UserLogin():
    data = request.get_json()
    email = data.get("email")
    password = data.get('password')

    user = User.query.filter_by(email=email, password=password).first()

    if user:
        return jsonify({"username": user.username})
    else:
        return jsonify({"username": None})

#User Signup API endpoint
@app.route("/api/UserSignup", methods=["POST"])
def UserSignup():
    data = request.get_json()

    new_user = User(
    username = data.get("username"),
    email = data.get("email"),
    password = data.get("password"),
    )
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "Registration successful!"})
    
  