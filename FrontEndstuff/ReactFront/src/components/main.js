import React, { useState } from "react";

const MessagingApp = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [inputMode, setInputMode] = useState("text");

  const conversations = [
    { id: 1, name: "John Doe", messages: ["Hi there!", "How are you?"] },
    { id: 2, name: "Jane Smith", messages: ["Hey!", "I'm good"] },
    // Add more conversations here
  ];

  const handleConversationClick = (conversationId) => {
    setSelectedConversation(conversationId);
  };

  const toggleInputMode = () => {
    setInputMode(inputMode === "text" ? "buttons" : "text");
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{ width: "20%", backgroundColor: "#f0f0f0", padding: "20px" }}
      >
        <h2>Conversations</h2>
        <ul>
          {conversations.map((conversation) => (
            <li
              key={conversation.id}
              onClick={() => handleConversationClick(conversation.id)}
            >
              {conversation.name}
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          flex: 1,
          backgroundColor: "#ffffff",
          padding: "20px",
          position: "relative",
        }}
      >
        {selectedConversation ? (
          <div>
            <h2>
              {
                conversations.find((conv) => conv.id === selectedConversation)
                  .name
              }
            </h2>
            <ul>
              {conversations
                .find((conv) => conv.id === selectedConversation)
                .messages.map((message, index) => (
                  <li key={index}>{message}</li>
                ))}
            </ul>
            {inputMode === "buttons" && (
              <div style={{ marginTop: "20px" }}>
                <button>😊</button>
                <button>👍</button>
                <button>👋</button>
                <button>🤔</button>
                <button>❤️</button>
              </div>
            )}
            <button
              onClick={toggleInputMode}
              style={{ position: "absolute", bottom: "20px", right: "20px" }}
            >
              {inputMode === "text" ? "Show Emojis" : "Show Text Input"}
            </button>
          </div>
        ) : (
          <p>Select a conversation to view messages</p>
        )}
      </div>
    </div>
  );
};

export default MessagingApp;
