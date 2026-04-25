import React from 'react'

const ChatboxArea = ({ selectedUser}) => {

 
  const chatHistory = {
    1: [
      { from: "them", text: "If the rumors prove true Brooklyn..." },
      { from: "me", text: "Yeah I heard that too" }
    ],
    2: [
      { from: "them", text: "So true. See ya there" },
      { from: "me", text: "Sure 👍" }
    ],
    3: [
      { from: "them", text: "Don't go to that concert..." }
    ]
  }

  
  const messages = chatHistory[selectedUser?.id] || []

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }}>

      
      <div style={{
        padding: "10px",
        borderBottom: "1px solid #ddd",
        backgroundColor: "#fff"
      }}>
        {selectedUser?.name || "Select a chat"}
      </div>

     
      <div style={{
        flex: 1,
        overflowY: "auto",
        backgroundColor: "#f5f5f5",
        padding: "10px"
      }}>
        {messages.length === 0 ? (
          <div>No messages</div>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: msg.from === "me" ? "flex-end" : "flex-start",
                marginBottom: "8px"
              }}
            >
              <div style={{
                padding: "8px 12px",
                borderRadius: "12px",
                backgroundColor: msg.from === "me" ? "#5865F2" : "#e4e6eb",
                color: msg.from === "me" ? "white" : "black",
                maxWidth: "60%"
              }}>
                {msg.text}
              </div>
            </div>
          ))
        )}
      </div>


      <div style={{
        borderTop: "1px solid #ccc",
        padding: "10px",
        backgroundColor: "#fff"
      }}>
        <input
          type="text"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid black"
          }}
          placeholder="Type a message..."
        />
      </div>

    </div>
  )
}

export default ChatboxArea