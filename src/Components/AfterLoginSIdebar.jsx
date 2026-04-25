import React, { useState } from 'react'
import './AfterLoginSidebar.css'
import FriendsSidebar from "./Friends/FriendsSidebar"
import ChatboxArea from './Friends/ChatboxArea'

const AfterLoginSIdebar = () => {

  const [sideBarOptions, setSideBar] = useState([
    "Conversation",
    "Friends",
    "Work Collegues",
    "Developer"
  ])

  const [showform, setShowForm] = useState(false)
  const [childData, setChildData] = useState({})
  const [darkMode, setDarkMode] = useState(false)

  // ✅ NEW: chat messages state (per user)
  const [messages, setMessages] = useState({})

  function reciveData(dataFromChild) {
    setChildData(dataFromChild)
  }

  function handleCreateBtn() {
    setShowForm(!showform)
  }

  function handleInput(e) {
    e.preventDefault()
    const value = e.target.elements[0].value
    if (!value.trim()) return
    setSideBar([...sideBarOptions, value])
    e.target.reset()
  }

  // ✅ NEW: send message function
  function sendMessage(text) {
    if (!text.trim() || !childData?.id) return

    const newMessage = {
      from: "me",
      text: text,
      id: Date.now()
    }

    setMessages((prev) => ({
      ...prev,
      [childData.id]: [...(prev[childData.id] || []), newMessage]
    }))
  }

  function HandleForm() {
    return (
      <form onSubmit={handleInput}>
        <label>Name Your Group</label>
        <input type="text" />
      </form>
    )
  }

  return (
    <div className={`sidebar ${darkMode ? "dark" : "light"}`} style={{ display: "flex", height: "100vh" }}>

      {/* LEFT SIDEBAR */}
      <div style={{ width: "260px", borderRight: "1px solid #ddd" }}>
        
        <div className="topSection">
          <div className="profile">
            <div className="avatar"></div>
            <div className="userInfo">
              <div className="name">TestUser</div>
              <div className="email">abc@gmail.com</div>
            </div>
          </div>

          <ul className="menu">
            {sideBarOptions.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>

        {showform && <HandleForm />}

        <div className="bottomSection">
          <button className="createBtn" onClick={handleCreateBtn}>
            Create ⊕
          </button>
        </div>
      </div>

      {/* FRIENDS SIDEBAR */}
      <FriendsSidebar reciveData={reciveData} />

      {/* CHAT AREA */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        height: "100vh"
      }}>
        <ChatboxArea
          selectedUser={childData}
          messages={messages[childData?.id] || []}
          sendMessage={sendMessage}
        />
      </div>

      {/* 🌙 FLOATING THEME BUTTON */}
      <button
        className="themeFloatingBtn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

    </div>
  )
}

export default AfterLoginSSidebar