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
        console.log("RESPONSE: ", response);
        console.log("Connections:", response.data[0].friends);
        setConnections(response.data[0].friends);
      })
      .catch((error) => {
        console.error("Error fetching connections:", error);
      });

    // Fetch conversations
    const recipient = "barry";

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
