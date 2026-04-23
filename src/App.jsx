import React, { useState } from 'react'
import Navigation from './Components/Navigation.jsx'
import Footer from './Components/Footer.jsx'
import "./App.css";
import Login from './Components/Login.jsx'
import robot from "./Assets/robot.png"
import bg from "./Assets/mainBackground.png"

const App = () => {
  const [showLogin , setShowLogin ] =useState(false)
  function toggleAuthMode(){
    setShowLogin(!showLogin)
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[0.9] font-extrabold uppercase mb-8" style={{fontFamily: "'LogoFont', sans-serif"}}>
            Group chat that's all fun & games
          </h1>
          <p className="text-lg md:text-xl text-white max-w-[700px] mb-10 leading-relaxed" style={{fontFamily: "'DesFont', sans-serif"}}>
            Discord is great for playing games and chilling with friends,
            or even building a worldwide community. Customise your own
            space to talk, play, and hang out.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <button className="bg-white text-black hover:text-[#5865F2] hover:shadow-2xl transition-all duration-200 px-8 py-4 rounded-full font-medium text-xl flex items-center justify-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z" fill="currentColor"/></svg>
              Download for Windows
            </button>
            <button className="bg-[#23272A] text-white hover:bg-[#36393f] hover:shadow-2xl transition-all duration-200 px-8 py-4 rounded-full font-medium text-xl">
              Open GRAVITY in your browser
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#23272A] w-full relative overflow-hidden flex flex-col items-center justify-center pt-32 pb-40 text-center min-h-[600px]">
        <div className="absolute inset-0 pointer-events-none opacity-50" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}></div>

        <h2 className="text-4xl md:text-[56px] leading-[1] font-extrabold uppercase tracking-tight mb-10 z-10 text-white" style={{fontFamily: "'LogoFont', sans-serif"}}>
          You can't scroll anymore. <br/> Better go chat.
        </h2>
        <button className="bg-white text-black hover:text-[#5865F2] hover:shadow-xl transition-all duration-200 px-8 py-4 rounded-full font-medium text-lg z-10 flex items-center justify-center gap-2 mb-20">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z" fill="currentColor"/></svg>
          Download for Mac
        </button>

        <div className="absolute bottom-0 w-full flex justify-center items-end opacity-80 pointer-events-none">
           <div className="w-[150px] h-[150px] bg-contain bg-no-repeat bg-bottom" style={{backgroundImage: `url(${robot})`}}></div>
        </div>
      </div>

      {showLogin && <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50"><Login /></div>}
      <Footer/>
      
    </div>
  )
}

export default App
