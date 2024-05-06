import React, { useEffect, useState } from "react";
import axios from "axios";

const MessagingApp = () => {
  const [connections, setConnections] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [recipient, setRecipient] = useState(""); // State to store recipient
  const [showInput, setShowInput] = useState(false);
  const [newConnection, setNewConnection] = useState("");

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
    axios
      .post(`/api/messages?emotion=${emotion}&recipient=${recipient}`)
      .then((response) => {
        console.log(response.data);

        //setMessage(response.data[0].text)
      });
  };

  const handleAddConnection = () => {
    console.log("Adding new connection:", newConnection);
    axios
      .post(`/api/newConnection?friend=${newConnection}`)
      .then((response) => console.log(response.data));
    window.location.reload();
    // Perform any necessary logic with the newConnection value
    // For example, you can make an API call to add the new connection
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          flex: "30%",
          padding: "20px",
          backgroundColor: "#f2f2f2",
          overflowY: "auto",
          borderRadius: "10px", // Adjust the value as needed
        }}
      >
        <h2 style={{ marginBottom: "10px" }}>Connections:</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {showInput && (
            <li>
              <input
                type="text"
                value={newConnection}
                onChange={(e) => setNewConnection(e.target.value)}
                style={{
                  padding: "10px",
                  borderRadius: "10px",
                  border: "none",
                  marginBottom: "10px", // Add more padding at the bottom
                  outline: "none",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  marginRight: "10px",
                  width: "calc(100% - 90px)", // Adjust width as needed
                  backgroundColor: "#f2f2f2", // Light gray background
                }}
              />
              <button
                onClick={handleAddConnection}
                style={{
                  padding: "10px 10px",
                  borderRadius: "10px",
                  backgroundColor: "#6a0dad", // Purple color
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Add
              </button>
            </li>
          )}

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
        {!showInput && (
          <button
            style={{
              padding: "10px 10px",
              borderRadius: "10px",
              backgroundColor: "#6a0dad", // Purple color
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => setShowInput(true)}
          >
            Add Connection
          </button>
        )}
      </div>
      <div style={{ flex: "70%", display: "flex", flexDirection: "column" }}>
        <div
          style={{
            flex: 1,
            padding: "20px",
            backgroundColor: "#fff",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            overflowY: "auto",
            borderRadius: "10px", // Adjust the value as needed
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
            borderRadius: "10px", // Adjust the value as needed
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
