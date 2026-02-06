import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="navbar"> 
      <div className="nav-left">
        <Link to="/" className="logo">
          APIHub
        </Link>

        <nav className="nav-links">
          <Link to="/apis">APIs</Link>
        </nav>

        <nav className="nav-links">
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        {user?.is_admin && (
          <nav className="nav-links">
            <Link to="/admin">Admin Panel</Link>
          </nav>
        )}
      </div>

      <div className="nav-right">
        {user ? (
          <>
            <span className="username">Hi, {user.name}</span>
            <button className="btn" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
