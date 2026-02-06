from flask import Blueprint, request, jsonify
from database import get_db
from utils.hash_password import hash_password, verify_password

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.json
    db = get_db()

    user = db.execute(
        "SELECT * FROM users WHERE email=?",
        (data["email"],)
    ).fetchone()

    if user and verify_password(data["password"], user["password"]):
        return jsonify({
            "id": user["id"],
            "name": user["name"],
            "is_admin": user["is_admin"]
        })

    return jsonify({"error": "Invalid credentials"}), 401