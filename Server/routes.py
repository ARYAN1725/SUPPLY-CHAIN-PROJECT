from flask import request, jsonify, session, send_file
from app import app
from models import *
from werkzeug.security import generate_password_hash, check_password_hash
from flask import session, jsonify

#User Login API endpoint
@app.route("/api/UserLogin", methods=["POST"])
def UserLogin():
    data = request.get_json()

    email = data.get("email", "").strip()
    password = data.get("password", "")
    remember_me = data.get('rememberMe', False)

    if not email:
        return jsonify({"message": "Please enter an email address!"}), 400
    
    if "@" not in email:
        return jsonify({"message": "The email must contain an '@"}), 400
    
    if "." not in email:
        return jsonify({"message": "The email must contian a '."}), 400
    
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

    username = data.get("username", "").strip()
    email = data.get("email", "").strip()
    password = data.get("password", "")

    #Validate username
    if not username:
        return jsonify({"message": "Username cannot be empty."}), 400
    
    #Validate email
    if not email:
        return jsonify({"message": "Please enter an email address!"}), 400

    if "@" not in email:
        return jsonify({"message": "Invalid email address, email must contain an '@'"}), 400
    
    if "." not in email:
        return jsonify({"message": "Invalid email address, email must contain a '.'"}), 400
    
    #Validate password length
    if len(password) < 6:
        return jsonify({"message": "Password must be atleast 6 characters long."}), 400
    
    #Check for unique email
    if User.query.filter_by(email=email).first():
        return jsonify({"message": "Email already registered. Please login."}), 400
    
    #Check for unique username
    if User.query.filter_by(username=username).first():
        return jsonify({"message": "Username already taken. Please choose another username."}), 400

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

    
  