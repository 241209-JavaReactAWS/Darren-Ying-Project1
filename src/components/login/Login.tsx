import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // Role state to capture user selection
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    if (!username || !password || !role) {
      alert("Please fill in all fields and select a role!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/users/login",
        { username, password, role },
        { withCredentials: true }
      );

      const userData = response.data;

      // Debugging login success
      console.log("Login successful:", userData);

      alert(`Welcome, ${userData.username}! Role: ${userData.role}`);

      // Navigate based on role
      if (userData.role === "ADMIN") {
        navigate("/admin");
      } else if (userData.role === "USER") {
        alert("You have limited access. Redirecting to the shelter dashboard.");
        navigate("/shelter");
      }
    } catch (err) {
      console.error("Login failed:", err);
      alert("Invalid credentials or login failed. Please try again.");
    }
  };

  return (
    <div>
      <main>
        {/* <h3>Login Here</h3> */}
        <figure>
          <img
            id="pic"
            src="https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="A cute dog"
          />
          <figcaption></figcaption>
        </figure>
        {/* <p>
          Welcome to our Dog Shelter!
        </p> */}

        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </label>
          <label>
            Role:
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">--- Select Role ---</option>
              <option value="ADMIN">Admin</option>
              <option value="USER">User</option>
            </select>
          </label>
          <button type="submit">Log In</button>
        </form>
      </main>
    </div>
  );
}

export default Login;
