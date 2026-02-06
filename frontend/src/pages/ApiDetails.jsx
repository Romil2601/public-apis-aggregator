import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function ApiDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get(`/apis/${id}`).then((res) => setData(res.data));
  }, [id]);

  if (!data) return <p className="container">Loading...</p>;

  return (
    <div className="container">
      <div className="api-card">
        <h2>{data.name}</h2>

        <p className="description">{data.description}</p>

        <div className="meta">
          <span>
            <strong>Auth:</strong> {data.auth}
          </span>
          <span>
            <strong>HTTPS:</strong> {data.https ? "Yes" : "No"}
          </span>
        </div>

        <a href={data.doc_url} target="_blank" rel="noreferrer" className="btn">
          Open Documentation
        </a>
      </div>
    </div>
  );
}
