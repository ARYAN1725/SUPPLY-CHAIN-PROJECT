from flask import request, jsonify, session, send_file
from app import app

#User Login API endpoint
@app.route("/api/UserLogin", methods=["POST"])
def UserLogin():
    data = request.get_json()
    email = data.get("email")
    password = data.get('password')

    if email == 'abc@gmail.com' and password == '1234':
        return jsonify({"username": "AryanPatil"})
    else:
        return jsonify({"username": None})

#User Signup API endpoint
@app.route("/api/UserSignup", methods=["POST"])
def UserSignup():
    data = request.get_json()
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    return jsonify({"message": "Registration successful!"})
    
  