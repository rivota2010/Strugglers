import React, { useEffect, useState } from "react";
import axios from "axios";

const MessagingApp = () => {
  const [connections, setConnections] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [recipient, setRecipient] = useState(""); // State to store recipient

  useEffect(() => {
    // Fetch connections
    axios
      .get("/api/newConnection")
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("Connections:", response.data[0].friends);
        setConnections(response.data[0].friends);
      })
      .catch((error) => {
        console.error("Error fetching connections:", error);
      });
  }, []); // Run once when component mounts

  useEffect(() => {
    // Fetch conversations when recipient changes
    if (recipient) {
      axios
        .get(`/api/conversations?recipient=${recipient}`)
        .then((response) => {
          console.log("Conversations:", response.data);
          let conv = [];
          for (let i = 0; i < response.data.length; i++) {
            conv.push(response.data[i].text);
          }
          console.log(conv);
          setConversations(conv);
        })
        .catch((error) => {
          console.error("Error fetching conversations:", error);
        });
    }
  }, [recipient]); // Run whenever recipient changes

  // Function to handle clicking on a connection
  const handleClick = (friendName) => {
    setRecipient(friendName); // Update recipient when a connection is clicked
  };
  const handleEmotionClick = (emotion) => {
    console.log("Emotion clicked:", emotion);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          flex: "30%",
          padding: "20px",
          backgroundColor: "#f2f2f2",
          overflowY: "auto",
        }}
      >
        <h2 style={{ marginBottom: "10px" }}>Connections:</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {connections.map((connection, index) => (
            <li
              key={index}
              style={{
                cursor: "pointer",
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "5px",
                backgroundColor: "#fff",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              }}
              onClick={() => handleClick(connection)}
            >
              {connection}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flex: "70%", display: "flex", flexDirection: "column" }}>
        <div
          style={{
            flex: 1,
            padding: "20px",
            backgroundColor: "#fff",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            overflowY: "auto",
          }}
        >
          <h2 style={{ marginBottom: "10px" }}>Conversations:</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {conversations.map((conversation, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "10px",
                  padding: "10px",
                  borderRadius: "5px",
                  backgroundColor: "#f2f2f2",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                {conversation}
              </li>
            ))}
          </ul>
        </div>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#fff",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ marginBottom: "10px" }}>Emotions:</h2>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              onClick={() => handleEmotionClick("Joy")}
              style={{
                padding: "20px",
                borderRadius: "5px",
                backgroundColor: "#ffd700",
                border: "none",
                cursor: "pointer",
                fontSize: "1.5em",
              }}
            >
              Joy 😊
            </button>
            <button
              onClick={() => handleEmotionClick("Sadness")}
              style={{
                padding: "20px",
                borderRadius: "5px",
                backgroundColor: "#87ceeb",
                border: "none",
                cursor: "pointer",
                fontSize: "1.5em",
              }}
            >
              Sadness 😢
            </button>
            <button
              onClick={() => handleEmotionClick("Fear")}
              style={{
                padding: "20px",
                borderRadius: "5px",
                backgroundColor: "#32cd32",
                border: "none",
                cursor: "pointer",
                fontSize: "1.5em",
              }}
            >
              Fear 😨
            </button>
            <button
              onClick={() => handleEmotionClick("Anger")}
              style={{
                padding: "20px",
                borderRadius: "5px",
                backgroundColor: "#ff4500",
                border: "none",
                cursor: "pointer",
                fontSize: "1.5em",
              }}
            >
              Anger 😡
            </button>
            <button
              onClick={() => handleEmotionClick("Disgust")}
              style={{
                padding: "20px",
                borderRadius: "5px",
                backgroundColor: "#6a5acd",
                border: "none",
                cursor: "pointer",
                fontSize: "1.5em",
              }}
            >
              Disgust 🤢
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagingApp;
