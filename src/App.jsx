import React, { useState } from 'react'
import Navigation from './Components/Navigation.jsx'
import Footer from './Components/Footer.jsx'
import "./App.css";
import Login from './Components/Login.jsx'
import "./Components/Login.css"
import AfterLoginSidebar from './Components/AfterLoginSidebar'
import robot from "./Assets/robot.png"
import bg from "./Assets/mainBackground.png"

const App = () => {
  const [showLogin , setShowLogin ] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function toggleAuthMode(){
    setShowLogin(!showLogin)
  }

  function handleLogin(){
    setShowLogin(false)
    setIsLoggedIn(true)
  }

  if (isLoggedIn) {
    return <AfterLoginSidebar />
  }

  return (
    <div className="font-sans text-white overflow-x-hidden w-full">
      <div className="bg-[#404EED] w-full border-b border-transparent">
        <Navigation toggleAuthMode={toggleAuthMode}/>
      </div>

      <div className="bg-[#404EED] w-full relative overflow-hidden flex justify-center pt-24 pb-32 min-h-[650px]">
        <div className="absolute inset-0 max-w-[1440px] mx-auto pointer-events-none">
          <div className="absolute bottom-0 left-[-5%] lg:left-[5%] w-[400px] h-[400px] bg-contain bg-no-repeat bg-bottom opacity-20 lg:opacity-60" style={{backgroundImage: `url(${bg})`}}></div>
          <div className="absolute bottom-0 right-[-5%] lg:right-[5%] w-[400px] h-[400px] bg-contain bg-no-repeat bg-bottom opacity-20 lg:opacity-60" style={{backgroundImage: `url(${robot})`}}></div>
        </div>

        <div className="relative z-10 max-w-[800px] text-center px-6 flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[0.9] font-extrabold uppercase mb-8">
            Group chat that's all fun & games
          </h1>
          <p className="text-lg md:text-xl text-white max-w-[700px] mb-10 leading-relaxed">
            Discord is great for playing games and chilling with friends,
            or even building a worldwide community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium text-xl">
              Download for Windows
            </button>
            <button className="bg-[#23272A] text-white px-8 py-4 rounded-full font-medium text-xl">
              Open GRAVITY in your browser
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#23272A] w-full relative overflow-hidden flex flex-col items-center justify-center pt-32 pb-40 text-center min-h-[600px]">
        <h2 className="text-4xl md:text-[56px] leading-[1] font-extrabold uppercase tracking-tight mb-10 text-white">
          You can't scroll anymore. Better go chat.
        </h2>

        <button className="bg-white text-black px-8 py-4 rounded-full font-medium text-lg mb-20">
          Download for Mac
        </button>
      </div>

      {showLogin && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50">
          <Login onRegisterClick={toggleAuthMode} onLogin={handleLogin} />
        </div>
      )}

      <Footer/>
    </div>
  )
}

export default App