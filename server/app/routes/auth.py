from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from app.models.userModel import create_user, get_user_by_email
from app.utils.jwtUtils import generate_token

auth_bp = Blueprint('auth', __name__, url_prefix='/auth')

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    if get_user_by_email(data['email']):
        return jsonify({'message': 'Email already exists'}), 400

    hashed = generate_password_hash(data['password'])
    data['password'] = hashed  

    create_user(data)
    return jsonify({'message': 'User registered successfully' }), 201


@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = get_user_by_email(data['email'])

    if not user or not check_password_hash(user['password'], data['password']):
        return jsonify({'message': 'Invalid credentials'}), 401

    token = generate_token(user['id'])
    user.pop('password')  
    return jsonify({'token': token, 'user': user})
