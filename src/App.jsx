import React, { useState } from 'react'
import Navigation from './Components/Navigation.jsx'
import Footer from './Components/Footer.jsx'
import "./App.css";
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import bg from "./Assets/mainBackground.png";
import robot from "./Assets/robot.png"
import ASCIIText from './Components/ASCIIText';


const App = () => {
  const [showLogin , setShowLogin ] =useState(false)
  function toggleAuthMode(){
    setShowLogin(!showLogin)
  }
  return (
    <div
    style={{
    backgroundImage: `url(${bg})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    minHeight:"100vh",


  }}
>
      <Navigation toggleAuthMode={toggleAuthMode}/>
      <ASCIIText
            text="GRAVITY"
            enableWaves
            asciiFontSize={3}
          />

      {/* {login ? <Login onRegisterClick={toggleAuthMode}/> : <Signup onLoginClick={toggleAuthMode}/>} */}
  
      <div className="flex items-center h-[80vh] px-16">
        <div className="max-w-xl text-white">
          <br/>
          <br/>
          <br/>
    
          
          <p className="mt-20 text-lg text-gray-200">
            Discord is great for playing games and chilling with friends,
            or even building a worldwide community. Customise your own
            space to talk, play, and hang out.
          </p>

        </div>
      </div>
      <div style={{position:"relative"}}>
        <div className='animate-bounce'
    
          style={{
            height: "100px",
            width:"100px",
            backgroundImage: `url(${robot})`,
            backgroundPosition:"center",
            backgroundSize:"cover",
            position:"fixed",
            top:"50%",
            left:"50%",
            position:"static",

          }}
        ></div>
      </div>
      {showLogin ?  <Login /> : ""}
      <Footer/>
      {/* {login ? <Login onRegisterClick={toggleAuthMode}/> : <Signup onLoginClick={toggleAuthMode}/>} */}
      
    </div>
  )
}

export default App
