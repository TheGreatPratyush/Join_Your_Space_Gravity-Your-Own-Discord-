import React from 'react'

const Login = ({onRegisterClick}) => {
  return (
    <div className='formOuterDiv'>
        <div>
        <h2 className='welcomeHeading'>Welcome Back</h2>
        <div>
            <label htmlFor="">Email</label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="">Password</label>
            <input type="password" />
        </div>
        <div>
            <button className='loginBtn'>Login</button>
        </div>
        <div>
            <h5>need a account?<button onClick={()=>{onRegisterClick()}}>register</button></h5>
        </div>
        </div>
    </div>
  )
}

export default Login
