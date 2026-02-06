from flask import Flask
from flask_cors import CORS

from routes.auth_routes import auth_bp
from routes.api_routes import api_bp
from routes.favorite_routes import favorite_bp
from routes.rating_routes import rating_bp
from routes.analytics_routes import analytics_bp

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return {"status": "Backend running"}

app.register_blueprint(auth_bp)
app.register_blueprint(api_bp)
app.register_blueprint(favorite_bp)
app.register_blueprint(rating_bp)
app.register_blueprint(analytics_bp)

if __name__ == "__main__":
    app.run(debug=True)