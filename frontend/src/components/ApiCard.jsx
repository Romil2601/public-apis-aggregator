export default function ApiCard({ api, onEdit, onDelete }) {
  return (
    <div className="api-card">
      <h3>{api.name}</h3>
      <p>{api.description}</p>

      <div className="api-actions">
        <button
          className="btn edit-btn"
          onClick={() => onEdit(api)}
        >
        Edit
        </button>

        <button
          className="btn delete-btn"
          onClick={() => onDelete(api.id)}
        >
        Delete
        </button>
      </div>
    </div>
  );
}