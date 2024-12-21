// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { authContext } from "../../App"; // Ensure this is the correct path to authContext
// import "./nav.css";

// this component is in charge of what path of webpage is
//leveraged to dynamically render what content appears on screen
// we need react router dom to control Dom based on router.
// react is lightweight library to pull in different solutions as needed

// href through <a> tag reloads entire page. lose benefits
// want SPA use link tag
// with endpoints Link to="/"
// show only pages we want
import { Link } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../App";
import "./nav.css";

function Nav() {
  const auth = useContext(authContext);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Login Page</Link>
          </li>
          <li>
            <Link to="/dogs">Dogs in Shelter</Link>
          </li>
          {auth?.role === "ADMIN" && (
            <>
              <li>
                <Link to="/admin">Admin Dashboard</Link>
              </li>
              <li>
                <Link to="/admin/addDog">Add a New Dog</Link>
              </li>
            </>
          )}
          <li>
            <Link to="/logout" className="logout-link">
              Log Out
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
