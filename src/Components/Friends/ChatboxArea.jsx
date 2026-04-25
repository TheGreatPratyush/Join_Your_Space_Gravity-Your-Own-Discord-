import React, { useState } from 'react'

const ChatboxArea = ({ selectedUser, messages, sendMessage }) => {

  const [input, setInput] = useState("")

  function handleSend(e) {
    e.preventDefault()
    if (!input.trim()) return

    sendMessage(input)
    setInput("")
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }}>

      {/* HEADER */}
      <div style={{
        padding: "10px",
        borderBottom: "1px solid #ddd",
        backgroundColor: "#fff"
      }}>
        {selectedUser?.name || "Select a chat"}
      </div>

      {/* MESSAGES */}
      <div style={{
        flex: 1,
        overflowY: "auto",
        backgroundColor: "#f5f5f5",
        padding: "10px"
      }}>
        {!selectedUser?.id ? (
          <div>Select a user to start chatting</div>
        ) : messages.length === 0 ? (
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

      {/* INPUT */}
      <form
        onSubmit={handleSend}
        style={{
          borderTop: "1px solid #ccc",
          padding: "10px",
          backgroundColor: "#fff"
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid black"
          }}
        />
      </form>

    </div>
  )
}

export default ChatboxArea