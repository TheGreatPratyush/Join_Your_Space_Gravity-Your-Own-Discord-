import React, { useState } from 'react'
import Navigation from './Components/Navigation.jsx'
import Footer from './Components/Footer.jsx'

import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
const App = () => {
  const [login , setLogin ] =useState(true)
  function toggleAuthMode(){
    setLogin(!login)
  }
  return (
    <div>
      <Navigation/>
      {login ? <Login onRegisterClick={toggleAuthMode}/> : <Signup onLoginClick={toggleAuthMode}/>}
  
    </div>
  )
}

export default App
