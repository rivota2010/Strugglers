// components/Login.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });
      console.log(response.data); // Log the response data
      // Redirect to chat interface or handle successful login
      navigate("/main"); // Navigate to the route of main.js component
    } catch (error) {
      console.error(error);
      // Handle login error (e.g., display error message to the user)
    }
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            style={{
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "100%",
            }}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            style={{
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "100%",
            }}
          />
          <button
            type="submit"
            style={{
              marginBottom: "10px",
              padding: "10px 20px",
              borderRadius: "5px",
              backgroundColor: "#6a0dad",
              border: "none",
              color: "white",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
