import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../App";
import axios from "axios";
import "./Nav.css"; // Import the CSS file

function Nav() {
  const auth = useContext(authContext);
  const navigate = useNavigate();

  const logOut = () => {
    axios
      .post("http://localhost:8080/users/logout", {}, { withCredentials: true })
      .then(() => {
        auth?.setUsername("");
        auth?.setRole("unauthenticated");
        navigate("/login");
      })
      .catch((err) => {
        console.error("Error during logout:", err);
        alert("Failed to log out. Please try again.");
      });
  };

  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        {auth?.role === "ADMIN" && (
          <li>
            <Link to="/adminDashboard" className="nav-link">
              Admin Dashboard
            </Link>
          </li>
        )}
        {auth?.role === "USER" && (
          <li>
            <Link to="/userDashboard" className="nav-link">
              User Dashboard
            </Link>
          </li>
        )}
        {auth?.role === "unauthenticated" ? (
          <li>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        ) : (
          <li>
            <button onClick={logOut} className="logout-button">
              Log Out
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
