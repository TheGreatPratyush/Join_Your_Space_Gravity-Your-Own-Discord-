import React from 'react'
import { div } from 'three/webgpu'

const ChatboxArea = ({selectedUser}) => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }}>

        <div style={{
        flex: 1,
        overflowY: "auto",
        backgroundColor: "#f5f5f5"
      }}>
        messages here
      </div>

      <div style={{
        borderTop: "1px solid #ccc",
        padding: "10px"
      }}>

        <input 
          type="text" 
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid black"
          }} 
        />
      </div>


    </div>
  )
}

export default ChatboxArea
