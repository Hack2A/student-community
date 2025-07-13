from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from config import Config

db = SQLAlchemy()
login_manager = LoginManager()
login_manager.login_view = "auth.login"

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    login_manager.init_app(app)

    from app.models.userModel import User

    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(int(user_id))

    from app.routes.authRoutes import auth_bp, oauth, register_google_oauth
    register_google_oauth(app, oauth)  # ✅ OAuth is initialized inside this
    app.register_blueprint(auth_bp, url_prefix="/auth")

    @app.cli.command("db_create")
    def db_create():
        with app.app_context():
            db.create_all()
            print("✔ Database created")

    return app
