from flask import Blueprint, jsonify
from database import get_db

analytics_bp = Blueprint("analytics", __name__)

@analytics_bp.route("/analytics/top-apis")
def top_apis():
    db = get_db()
    data = db.execute("""
        SELECT api_id, COUNT(*) as saves
        FROM favorites
        GROUP BY api_id
        ORDER BY saves DESC
    """).fetchall()
    return jsonify([dict(d) for d in data])

@analytics_bp.route("/analytics/most-viewed")
def most_viewed():
    db = get_db()
    data = db.execute("""
        SELECT api_id, COUNT(*) as views
        FROM views
        GROUP BY api_id
        ORDER BY views DESC
    """).fetchall()
    return jsonify([dict(d) for d in data])