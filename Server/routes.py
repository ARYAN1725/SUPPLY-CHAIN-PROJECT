from flask import request, jsonify, session, send_file
from app import app
from models import *
from werkzeug.security import generate_password_hash, check_password_hash

#User Login API endpoint
@app.route("/api/UserLogin", methods=["POST"])
def UserLogin():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()

    if user and check_password_hash(user.password, password):
        return jsonify({"username": user.username})
    else:
        return jsonify({"username": None})

#User Signup API endpoint
@app.route("/api/UserSignup", methods=["POST"])
def UserSignup():
    data = request.get_json()

    #Hash the password
    hashed_password = generate_password_hash(data['password'])

    new_user = User(
    username = data.get("username"),
    email = data.get("email"),
    password = hashed_password,
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "Registration successful!"})
    
  