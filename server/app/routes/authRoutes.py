from flask import Blueprint, jsonify, redirect, url_for, current_app
from flask_login import login_user, logout_user
from authlib.integrations.flask_client import OAuth
from app import db
from app.models.userModel import User


auth_bp = Blueprint("auth", __name__)
oauth = OAuth()  # ✅ Only declare here, init in __init__.py

@auth_bp.route("/login", methods=["GET"])
def login():
    redirect_uri = url_for("auth.callback", _external=True)
    google = oauth.create_client("google")
    return google.authorize_redirect(redirect_uri)

@auth_bp.route("/callback")
def callback():
    try:
        google = oauth.create_client("google")
        token = google.authorize_access_token()
        print("🔐 Token:", token)

        # ✅ Use full URL for userinfo endpoint
        userinfo = google.get("https://openidconnect.googleapis.com/v1/userinfo").json()
        print("🧑 User Info:", userinfo)

        user = User.query.filter_by(google_id=userinfo["sub"]).first()

        if not user:
            user = User(
                google_id=userinfo["sub"],
                name=userinfo.get("name"),
                email=userinfo.get("email"),
                picture=userinfo.get("picture"),
            )
            db.session.add(user)
            db.session.commit()

        login_user(user)

        return jsonify({
            "status": "success",
            "message": "User logged in",
            "user": {
                "id": user.id,
                "name": user.name,
                "email": user.email,
                "picture": user.picture,
            }
        })

    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"status": "error", "message": str(e)}), 400

from flask import redirect, url_for

@auth_bp.route("/logout", methods=["GET"])
def logout():
    logout_user()
    return redirect(url_for("auth.login"))  # or your homepage

from flask_login import login_required, current_user

@auth_bp.route("/me", methods=["GET"])
@login_required
def get_user():
    return jsonify({
        "id": current_user.id,
        "name": current_user.name,
        "email": current_user.email
    })


def register_google_oauth(app, oauth):
    oauth.init_app(app)
    oauth.register(
        name="google",
        client_id=app.config["GOOGLE_CLIENT_ID"],
        client_secret=app.config["GOOGLE_CLIENT_SECRET"],
        server_metadata_url="https://accounts.google.com/.well-known/openid-configuration",
        client_kwargs={"scope": "openid email profile"},
    )



