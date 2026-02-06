import { useState } from "react";
import api from "../services/api";

export default function AdminDashboard() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category_id: "",
    auth: "",
    https: 1,
    doc_url: "",
  });

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || !user.is_admin) {
    return <p className="container">Access denied</p>;
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = () => {
    api
      .post("/apis", {
        ...form,
        https: Number(form.https),
      })
      .then(() => {
        alert("API added successfully");
        setForm({
          name: "",
          description: "",
          category_id: "",
          auth: "",
          https: 1,
          doc_url: "",
        });
      })
      .catch(() => alert("Error adding API"));
  };

  return (
    <div className="container-admin-dashbaord">
      <h2 style={{ color: "#22c55e" }}>🛠️ Add New API</h2>

      <div className="api-card-ad neon">
        <input
          className="input"
          name="name"
          placeholder="API Name"
          value={form.name}
          onChange={handleChange}
        />

        <textarea
          className="input"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          style={{ height: "100px" }}
        />

        <input
          className="input"
          name="category_id"
          placeholder="Category ID (e.g. 1)"
          value={form.category_id}
          onChange={handleChange}
        />

        <input
          className="input"
          name="auth"
          placeholder="Auth type (API Key / OAuth / None)"
          value={form.auth}
          onChange={handleChange}
        />

        <select
          className="input"
          name="https"
          value={form.https}
          onChange={handleChange}
        >
          <option value={1}>HTTPS Supported</option>
          <option value={0}>No HTTPS</option>
        </select>

        <input
          className="input"
          name="doc_url"
          placeholder="Documentation URL"
          value={form.doc_url}
          onChange={handleChange}
        />

        <button className="btn-login" onClick={submit}>
          Add API
        </button>
      </div>
    </div>
  );
}
