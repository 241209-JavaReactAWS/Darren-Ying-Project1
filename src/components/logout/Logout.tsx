import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { authContext } from "../../App";

function Logout() {
  const auth = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {
        // Call the backend logout API
        await axios.post("http://localhost:8080/users/logout", {}, { withCredentials: true });

        // Clear the context values
        if (auth) {
          auth.setUsername("");
          auth.setRole("");
        }

        // Redirect to the login page
        navigate("/");
      } catch (err) {
        console.error("Error during logout:", err);
        alert("Failed to log out. Please try again.");
        navigate("/"); // Ensure user is redirected even if logout API fails
      }
    };

    performLogout();
  }, [auth, navigate]);

  return null; // No UI needed for this component
}

export default Logout;
