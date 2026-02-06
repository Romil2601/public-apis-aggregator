import { useEffect, useState } from "react";
import api from "../services/api";
import ApiCard from "../components/ApiCard";

export default function ApiList() {
  const [apis, setApis] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchApis();
  }, []);

  const fetchApis = async () => {
    const res = await api.get("/apis");
    setApis(res.data);
  };

  // DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this API?")) return;

    await api.delete(`/apis/${id}`);
    setApis(prev => prev.filter(api => api.id !== id));
  };

  // EDIT (simple redirect)
  const handleEdit = (apiData) => {
    // Example: navigate to edit page
    // /apis/edit/3
    window.location.href = `/apis/edit/${apiData.id}`;
  };

  const filtered = apis.filter(api =>
    api.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="api-page">
      {/* HEADER */}
      <div className="api-header">
        <h2>🎮 Public APIs</h2>
        <p>Browse developer-ready APIs built for production</p>

        <input
          className="search-input"
          placeholder="Search APIs..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* API GRID */}
      <div className="api-grid">
        {filtered.length > 0 ? (
          filtered.map(apiItem => (
            <ApiCard
              key={apiItem.id}
              api={apiItem}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p className="no-results">No APIs found</p>
        )}
      </div>
    </div>
  );
}