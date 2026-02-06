from flask import Blueprint, request, jsonify
from database import get_db

rating_bp = Blueprint("rating", __name__)

@rating_bp.route("/rate", methods=["POST"])
def rate_api():
    data = request.json
    db = get_db()
    db.execute(
        "INSERT INTO ratings (user_id,api_id,rating) VALUES (?,?,?)",
        (data["user_id"], data["api_id"], data["rating"])
    )
    db.commit()
    return jsonify({"message": "Rating submitted"})
