import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function Home() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    api
      .get("/analytics/top-apis")
      .then((res) => setTrending(res.data.slice(0, 3)));
  }, []);

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <h1>Discover Powerful Public APIs</h1>
        <p>Explore, save, and analyze APIs built for developers.</p>

        <div className="hero-actions">
          <Link to="/apis" className="btn">
            Explore APIs
          </Link>
          <Link to="/dashboard" className="btn">
            View Analytics
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature-grid">
          <div className="feature-card">
            <span className="feature-icon">🔍</span>
            <h3>API Discovery</h3>
            <p>Explore curated public APIs for developers</p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">⭐</span>
            <h3>Save & Rate</h3>
            <p>Bookmark APIs and rate what you love</p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">📊</span>
            <h3>Analytics</h3>
            <p>Track trending and popular APIs</p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🛠️</span>
            <h3>Admin Control</h3>
            <p>Manage APIs and platform data</p>
          </div>
        </div>
      </section>

      {/* TRENDING */}
      <section className="trending">
        <h2>🔥 Trending APIs</h2>

        <div className="api-grid">
          {trending.map((item) => (
            <div key={item.api_id} className="api-card neon">
              <p className="api-title">API ID #{item.api_id}</p>
              <p className="api-meta">⭐ Saves: {item.saves}</p>
              <Link to="/apis" className="btn-primary small">
                View API
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="roadmap">
        <h2>How It Works</h2>

        <div className="roadmap-container">
          <div className="roadmap-step">
            <div className="roadmap-dot">1</div>
            <div className="roadmap-content">
              <h3>Browse APIs</h3>
              <p>Explore developer-friendly public APIs across categories</p>
            </div>
          </div>

          <div className="roadmap-step">
            <div className="roadmap-dot">2</div>
            <div className="roadmap-content">
              <h3>Save & Rate</h3>
              <p>Bookmark useful APIs and share feedback</p>
            </div>
          </div>

          <div className="roadmap-step">
            <div className="roadmap-dot">3</div>
            <div className="roadmap-content">
              <h3>Track Trends</h3>
              <p>See what APIs are popular and trending</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
