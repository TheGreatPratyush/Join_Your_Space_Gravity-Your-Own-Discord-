import React, { useState } from 'react'
import { div } from 'three/tsl'

const chats = [
  { id: 1, name: "Carry Jenkinson", message: "If the rumors prove true Brooklyn...", time: "15:32", avatar: 12 },
  { id: 2, name: "Nick Parsons", message: "So true. See ya there", time: "12:46", avatar: 13 },
  { id: 3, name: "Alexey Vishnevsky", message: "Don't try to go on that concert...", time: "10:45", avatar: 14 },
  { id: 4, name: "Nicky Franceska", message: "Sometimes I want to be a rockstar...", time: "09:30", avatar: 15 },
  { id: 5, name: "Kelly Minori", message: "Yeah, that's the idea.", time: "08:54", avatar: 16 },
  { id: 6, name: "Bella Frederick", message: "Love the recipe that you gave me...", time: "07:47", avatar: 17 },
  { id: 7, name: "Alan Dupree", message: "Seems good to me, let's do that.", time: "06:21", avatar: 18 },
  { id: 8, name: "Erick Conell", message: "Sorry, not now...", time: "05:18", avatar: 19 },
  { id: 9, name: "Sarah Lewiston", message: "Are you coming today?", time: "04:50", avatar: 20 },
  { id: 10, name: "John Carter", message: "Meeting at 5?", time: "14:12", avatar: 21 },
  { id: 11, name: "Emma Watson", message: "I'll send the files soon.", time: "13:05", avatar: 22 },
]

const FriendsSidebar = () => {
    const [input,setInput] = useState("")
    const [chat,setChat] = useState(chats)
    const [selectedUser, setSelectedUser] = useState(chats[0])

const User = ({ profilePic, name, lastMessage, time ,onClick, isSelected}) => {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px",
      marginBottom: "5px",
      borderBottom: "1px solid #eee",
      backgroundColor: isSelected ? "#e3e5e8" : "transparent",
      borderRadius: "8px",

    }} onClick = {onClick} >
      
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
        {chat.map((e)=>{
            return <User profilePic={`https://i.pravatar.cc/40?img=${e.avatar}`} name={e.name} lastMessage={e.message} time={e.time} onClick={() => {setSelectedUser(e) 
                console.log(e)}}  isSelected={selectedUser.id==e.id}  />
        })}
      </div>

    </div>
  )
}

export default FriendsSidebar