import React from "react";

const Landing = () => {
  return (
    <>
      {/* Styles */}
      <style>
        {`
          /* Footer Styling */
          footer {
              background: linear-gradient(to top left, #0000FF, #8A2BE2);
              color: white;
              padding: 20px;
              text-align: center;
              width: 100%;
              position: fixed;
              bottom: 0;
              left: 0;
          }
          /* Body Styling */
          body {
              background-color: #000000;
              margin: 0; 
              padding: 0; 
              overflow-x: hidden; /* Prevent horizontal scrollbar */
          }
          /* Navigation Styling */
          nav {
              background: linear-gradient(to top left, #0000FF, #8A2BE2);
              color: white;
              padding: 20px;
              text-align: center;
              width: 100%;
              position: fixed;
              top: 0;
              left: 0;
          }
          nav ul {
              list-style: none;
              margin: 0;
              padding: 0;
              display: flex; /* Display links horizontally */
              justify-content: space-between; /* Space between links */
              align-items: center; /* Align vertically */
          }
          nav ul li a {
              padding: 10px 20px;
              border-radius: 25px;
              background-color: #000000;
              color: white;
              text-decoration: none;
          }
          nav ul li a:hover {
              background-color: #0056b3;
          }
          nav ul li a:active {
              background-color: #004ba0;
          }
          /* Content Area */
          .content-area {
              display: flex;
              flex-direction: column;
              align-items: center; /* Center horizontally */
              margin-top: 150px; /* Adjust the margin as needed */
          }
          .header-text {
              font-size: 60px; /* Reduce font size */
              color: white;
              text-align: center; /* Center text */
              margin-bottom: 50px; /* Add margin between header and emotions */
          }
          /* Emotion Rectangles */
          .emotions {
              display: flex;
              justify-content: space-around; /* Evenly space emotions */
              width: 100%; /* Full width */
          }
          .emotion {
              display: flex;
              align-items: center;
              padding: 20px;
              color: white;
              border-radius: 10px;
              font-size: 30px; /* Reduce font size */
          }
          .joy { background-color: yellow; color: black; }
          .sadness { background-color: aqua; }
          .fear { background-color: green; }
          .anger { background-color: red; }
          .disgust { background-color: purple; }
        `}
      </style>

      {/* Navigation */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <ul>
            <li>
              <a href="/signup">SignUp</a>
            </li>
            <li></li>
          </ul>
        </div>
      </nav>

      {/* Header Text and Emotion Rectangles */}
      <div className="content-area">
        <div className="header-text">
          <h1>A better Way to Communicate</h1>
        </div>
        <div className="emotions">
          <div className="emotion joy">Joy 😊</div>
          <div className="emotion sadness">Sadness 😔</div>
          <div className="emotion fear">Fear 😨</div>
          <div className="emotion anger">Anger 😠</div>
          <div className="emotion disgust">Disgust 🤢</div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        &copy; 2025 Chat. All rights reserved.
      </footer>
    </>
  );
};

export default Landing;
