import React from 'react'
import lastPage from "../Assets/lastpage.png"
import animated from "../Assets/animatedguy.png"
const LastPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${lastPage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh"
      }}
    
    >
      <h1 className="text-5xl md:text-6xl font-bold text-center leading-tight"
      style={{
        textAlign:"center",
        color:"white",
        padding:"100px"
      }}
      >
        YOU CAN'T SCROLL ANYMORE. <br />
        BETTER GO CHAT.
      </h1>
      <div className='h-[100] w-[100] ' 
        style={{
             height: "500px",
            width:"200px",
            backgroundPosition:"center",
            backgroundSize:"cover",
            position:"fixed",
            left:"50%",
            backgroundImage: `url(${animated})`
        }}
      ></div>
    </div>
  )
}

export default LastPage