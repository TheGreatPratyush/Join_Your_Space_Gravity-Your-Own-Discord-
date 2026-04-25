import React, { useState } from 'react'
import { div } from 'three/tsl'

const chats = [
  { name: "Carry Jenkinson", message: "If the rumors prove true Brooklyn...", time: "15:32" },
  { name: "Nick Parsons", message: "So true. See ya there", time: "12:46" },
  { name: "Alexey Vishnevsky", message: "Don't try to go on that concert...", time: "10:45" },
  { name: "Nicky Franceska", message: "Sometimes I want to be a rockstar...", time: "09:30" },
  { name: "Kelly Minori", message: "Yeah, that's the idea.", time: "08:54" },
  { name: "Bella Frederick", message: "Love the recipe that you gave me...", time: "07:47" },
  { name: "Alan Dupree", message: "Seems good to me, let's do that.", time: "06:21" },
  { name: "Erick Conell", message: "Sorry, not now...", time: "05:18" },
  { name: "Sarah Lewiston", message: "Are you coming today?", time: "04:50" },
  { name: "John Carter", message: "Meeting at 5?", time: "14:12" },
  { name: "Emma Watson", message: "I'll send the files soon.", time: "13:05" },
]

const FriendsSidebar = () => {
    const [input,setInput] = useState("")
    const [chat,setChat] = useState(chats)
const User = ({ profilePic, name, lastMessage, time }) => {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 0",
      borderBottom: "1px solid #eee"
    }}>
      
      <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
        <img 
          src={profilePic} 
          alt="" 
          style={{width: "40px", height: "40px", borderRadius: "50%"}}
        />

        <div>
          <div style={{fontWeight: "bold"}}>{name}</div>
          <div style={{fontSize: "12px", color: "gray"}}>
            {lastMessage}
          </div>
        </div>
      </div>

      <div style={{fontSize: "12px", color: "gray"}}>
        {time}
      </div>

    </div>
  )
}
function handleInput(e){
    let value = e.target.value
    setInput(value)
    let newUpdated = chats.filter( (h)=>{return h.name.toLowerCase().includes(value.toLowerCase())})
    setChat(newUpdated)
}
  return (
    <div style={{
      width: "320px",
      borderRight: "1px solid #ddd",
      height: "100vh",
      padding: "15px",
      boxSizing: "border-box"
    }}>

      <div>
        <h2 style={{margin: 0}}>Friends</h2>
        <p style={{margin: 0, fontSize: "12px", color: "gray"}}>
          245 conversations
        </p>
      </div>

      <input 
        placeholder="Search"
        value={input}
        onChange={(e)=>{
            handleInput(e)
        }}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "15px",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}
      />

  
      <div style={{marginTop: "20px"}}>
        {chat.map((e,index)=>{
            return <User profilePic={`https://i.pravatar.cc/40?img=${index + 12}`} name={e.name} lastMessage={e.message} time={e.time}  />
        })}
      </div>

    </div>
  )
}

export default FriendsSidebar