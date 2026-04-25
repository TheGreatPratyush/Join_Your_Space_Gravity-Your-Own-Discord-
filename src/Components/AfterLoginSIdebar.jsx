import React, { useState } from 'react'
import './AfterLoginSidebar.css'
import FriendsSidebar from "./Friends/FriendsSidebar"

const AfterLoginSIdebar = () => {
  const [sideBarOptions,setSideBar] = useState(["Conversation","Friends","Work Collegues","Developer"])
  const [showform,setShowForm]=useState(false)

  function handleCreateBtn(){
    setShowForm(!showform)
  }

  function handleInput(e){
    e.preventDefault()
    const value = e.target.elements[0].value
    console.log(value)
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
    <div className="sidebar" style={{display:"flex", height:"100vh"}}>
      

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
        </div>
      </div>

      
      <FriendsSidebar />

      
      <div style={{flex:1, padding:"20px"}}>
        <h2>Select a chat</h2>
      </div>

    </div>
  )
}

export default AfterLoginSIdebar