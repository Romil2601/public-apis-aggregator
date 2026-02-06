from flask import Blueprint, jsonify, request
from database import get_db

api_bp = Blueprint("api", __name__)

@api_bp.route("/apis", methods=["GET"])
def get_apis():
    db = get_db()
    apis = db.execute("SELECT * FROM apis").fetchall()
    return jsonify([dict(a) for a in apis])

@api_bp.route("/apis/<int:api_id>", methods=["GET"])
def api_details(api_id):
    db = get_db()
    db.execute("INSERT INTO views (api_id) VALUES (?)", (api_id,))
    db.commit()

    api = db.execute("SELECT * FROM apis WHERE id=?", (api_id,)).fetchone()
    return jsonify(dict(api))

@api_bp.route("/apis", methods=["POST"])
def add_api():
    data = request.json
    db = get_db()
    db.execute("""
        INSERT INTO apis (name,description,category_id,auth,https,doc_url)
        VALUES (?,?,?,?,?,?)
    """, (
        data["name"], data["description"], data["category_id"],
        data["auth"], data["https"], data["doc_url"]
    ))
    db.commit()
    return jsonify({"message": "API added"})