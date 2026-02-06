from flask import Blueprint, request, jsonify
from database import get_db

favorite_bp = Blueprint("favorite", __name__)

@favorite_bp.route("/favorites", methods=["POST"])
def add_favorite():
    data = request.json
    db = get_db()
    db.execute(
        "INSERT INTO favorites (user_id,api_id) VALUES (?,?)",
        (data["user_id"], data["api_id"])
    )
    db.commit()
    return jsonify({"message": "Added to favorites"})