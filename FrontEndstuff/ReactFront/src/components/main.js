import React, { useEffect, useState } from "react";
import axios from "axios";

const MessagingApp = () => {
  const [connections, setConnections] = useState([]);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    // Fetch connections
    axios
      .get("/api/newConnection")
      .then((response) => {
        console.log("Connections:", response.data);
        setConnections(response.data);
      })
      .catch((error) => {
        console.error("Error fetching connections:", error);
      });

    // Fetch conversations
    axios
      .get("/api/conversations")
      .then((response) => {
        console.log("Conversations:", response.data);
        setConversations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching conversations:", error);
      });
  }, []); // Run once when component mounts

  return (
    <div>
      <h2>Connections:</h2>
      <ul>
        {connections.map((connection, index) => (
          <li key={index}>{connection}</li>
        ))}
      </ul>
      <h2>Conversations:</h2>
      <ul>
        {conversations.map((conversation, index) => (
          <li key={index}>{conversation}</li>
        ))}
      </ul>
    </div>
  );
};

export default MessagingApp;
