import React from 'react'
import "./Login.css"

const Login = ({ onRegisterClick, onLogin }) => {
  return (
    <div className='formOuterDiv'>
      <div className='formCard'>
        <h2 className='welcomeHeading'>Welcome Back</h2>

        <div className='inputGroup'>
          <label>Email</label>
          <input type="text" placeholder="Enter your email" />
        </div>

        <div className='inputGroup'>
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <button className='loginBtn' onClick={onLogin}>Login</button>

        <h5 className='bottomText'>
          Need an account?
          <button onClick={onRegisterClick}> Register</button>
        </h5>
      </div>
    </div>
  )
}

export default Login