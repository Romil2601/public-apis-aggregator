import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

/* ---------------- DEMO DATA ---------------- */

const metrics = [
  { label: "Total Users", value: 1240 },
  { label: "Total APIs", value: 320 },
  { label: "APIs Saved", value: 2870 },
  { label: "Searches", value: 8450 },
];

const topApis = [
  { api_id: "Weather API", saves: 120 },
  { api_id: "Movies API", saves: 95 },
  { api_id: "Crypto API", saves: 80 },
  { api_id: "News API", saves: 65 },
  { api_id: "Games API", saves: 50 },
];

const categories = [
  { name: "Weather", value: 40 },
  { name: "Finance", value: 30 },
  { name: "Movies", value: 20 },
  { name: "Games", value: 25 },
  { name: "Crypto", value: 15 },
];

const weeklyUsage = [
  { day: "Mon", saves: 40 },
  { day: "Tue", saves: 55 },
  { day: "Wed", saves: 48 },
  { day: "Thu", saves: 70 },
  { day: "Fri", saves: 90 },
  { day: "Sat", saves: 65 },
  { day: "Sun", saves: 85 },
];

const trendingApis = [
  { name: "AI Tools API", growth: "+32%" },
  { name: "Sports Stats API", growth: "+24%" },
  { name: "Crypto Prices API", growth: "+18%" },
];

const COLORS = ["#6366f1", "#22c55e", "#f97316", "#14b8a6", "#e11d48"];

/* ---------------- DASHBOARD ---------------- */

export default function Dashboard() {

  return (
    <div className="dashboard-page">
      <div className="container">
        <h2>Analytics Dashboard (DEMO)</h2>

        {/* ---- METRICS ---- */}
        <div className="metrics">
          {metrics.map((item, i) => (
            <div key={i} className="metric-card">
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

        {/* ---- TOP APIs ---- */}
        <section className="analytics-home">
          <h3>Top Rated APIs</h3>
          <BarChart width={420} height={280} data={topApis}>
            <XAxis dataKey="api_id" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="saves" fill="#4f46e5" radius={[6, 6, 0, 0]} />
          </BarChart>

          {/* ---- CATEGORY PIE ---- */}
          <h3>Category Distribution</h3>
          <PieChart width={360} height={260}>
            <Pie
              data={categories}
              dataKey="value"
              nameKey="name"
              outerRadius={90}
            >
              {categories.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </section>

        {/* ---- WEEKLY USAGE ---- */}
        <section
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3>Weekly API Saves</h3>
          <LineChart width={420} height={260} data={weeklyUsage}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="saves"
              stroke="#16a34a"
              strokeWidth={3}
            />
          </LineChart>
        </section>

        {/* ---- TRENDING ---- */}
        <section className="roadmap">
          <h2>Trending APIs</h2>

          <div className="roadmap-container">
            <div className="roadmap-step">
              <div className="roadmap-dot">🔥</div>
              <div className="roadmap-content">
                <h3>AI Tools API</h3>
                <p>+32% growth this week</p>
              </div>
            </div>

            <div className="roadmap-step">
              <div className="roadmap-dot">⚡</div>
              <div className="roadmap-content">
                <h3>Sports Stats API</h3>
                <p>+24% usage increase</p>
              </div>
            </div>

            <div className="roadmap-step">
              <div className="roadmap-dot">📈</div>
              <div className="roadmap-content">
                <h3>Crypto Prices API</h3>
                <p>+18% saved by users</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
