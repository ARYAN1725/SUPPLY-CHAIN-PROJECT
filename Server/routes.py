from flask import request, jsonify, session, send_file
from app import app
from models import *
from werkzeug.security import generate_password_hash, check_password_hash
from flask import session, jsonify

#User Login API endpoint
@app.route("/api/UserLogin", methods=["POST"])
def UserLogin():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()

    if user and check_password_hash(user.password, password):
        #Save user information in session
        session['user_id'] = user.id
        session['username'] = user.username
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

#API endpoint for Landing Page (Home Page)
@app.route("/api/landingpage", methods=["GET"])
def LandingPage():
    if 'user_id' not in session:
        return jsonify({"error": "Unauthorized"}), 401
    
    return jsonify({
        "message": f"Welcome back, {session['username']}!"
    })

    
  