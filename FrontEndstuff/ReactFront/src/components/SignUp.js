import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/signup", {
        username,
        email,
        password,
      });
      console.log(response.data); // Log the response data
      // Redirect to main page after successful sign-up
      navigate("/main"); // Push to the route of main.js component
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the login page when the button is clicked
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Have an account already?{" "}
        <button onClick={handleLoginClick}>Click here to log in</button>
      </p>
    </div>
  );
}

export default SignUp;
