import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/LogIn";
import MessagingApp from "./components/main";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Lines</h1>
        <Routes>
          <Route path="/signup" element={<SignUp />} />{" "}
          {/* Route for SignUp component */}
          <Route path="/login" element={<Login />} />{" "}
          {/* Route for Login component */}
          <Route path="/main" element={<MessagingApp />} />{" "}
          {/* Route for MessagingApp component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
