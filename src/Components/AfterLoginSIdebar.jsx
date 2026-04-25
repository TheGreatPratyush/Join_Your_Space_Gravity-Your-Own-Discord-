import React, { useState } from 'react'
import './AfterLoginSidebar.css'
import FriendsSidebar from "./Friends/FriendsSidebar"
import ChatboxArea from './Friends/ChatboxArea'

const AfterLoginSIdebar = () => {
  const [sideBarOptions,setSideBar] = useState(["Conversation","Friends","Work Collegues","Developer"])
  const [showform,setShowForm]=useState(false)
  const [childData ,setChildData ] = useState({})
  const [darkMode, setDarkMode] = useState(false) // 👈 NEW

  function reciveData(dataFromChild){
    setChildData(dataFromChild)
  }

  function handleCreateBtn(){
    setShowForm(!showform)
  }

  function handleInput(e){
    e.preventDefault()
    const value = e.target.elements[0].value
    setSideBar([...sideBarOptions,value])
  }

  function HandleForm(){
    return (
      <form onSubmit={(e)=>{handleInput(e)}}>
        <label>Name Your Group</label>
        <input type="text" />
      </form>
    )
  }  

  return (
    <div className={`sidebar ${darkMode ? "dark" : "light"}`} style={{display:"flex", height:"100vh"}}>
      
      <div style={{width:"260px", borderRight:"1px solid #ddd"}}>
        <div className="topSection">
          <div className="profile">
            <div className="avatar"></div>
            <div className="userInfo">
              <div className="name">TestUser</div>
              <div className="email">abc@gmail.com</div>
            </div>
          </div>

          <ul className="menu">
            {
              sideBarOptions.map((e)=>{
                return <li key={e}>{e}</li>
              })
            }
          </ul>
        </div>

        {showform && <HandleForm/>}

        <div className="bottomSection">
          <button className="createBtn" onClick={handleCreateBtn}>
            Create ⊕
          </button>

          {/* 👇 TOGGLE BUTTON */}
          <button
            className="themeFloatingBtn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      <FriendsSidebar reciveData={reciveData} />

      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        height: "100vh"
      }}>
        <ChatboxArea selectedUser={childData} />
      </div>
    </div>
  )
}

export default AfterLoginSIdebar