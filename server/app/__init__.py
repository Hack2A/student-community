from flask import Flask
from flask_cors import CORS
import mysql.connector
from .config import Config

db = None
cursor = None

def create_app():
    global db, cursor
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(Config)

    db = mysql.connector.connect(**Config.DB_CONFIG)
    cursor = db.cursor(dictionary=True)

    from .routes.auth import auth_bp
    app.register_blueprint(auth_bp)

    return app
