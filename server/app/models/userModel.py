from flask_login import UserMixin
from app import db
from datetime import datetime
class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    google_id = db.Column(db.String(255), unique=True, nullable=False)
    email = db.Column(db.String(255), unique=True, nullable=False)
    name = db.Column(db.String(255))
    picture = db.Column(db.String(512))
    github= db.Column(db.String(255), unique=True, nullable=True)
    linkedin= db.Column(db.String(255), unique=True, nullable=True)
    batch = db.Column(db.Integer, nullable=True)
    college = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
