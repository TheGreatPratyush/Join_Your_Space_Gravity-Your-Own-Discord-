import React from 'react';

const Signup = ({onLoginClick}) => {
  return (
    <div className="signupOuter">
      <div className="signupCard">
        <h2>Create an account</h2>

        <div className="formGroup">
          <label>Email *</label>
          <input type="email" />
        </div>

        <div className="formGroup">
          <label>Display Name</label>
          <input type="text" />
        </div>

        <div className="formGroup">
          <label>Username *</label>
          <input type="text" />
        </div>

        <div className="formGroup">
          <label>Password *</label>
          <input type="password" />
        </div>

        <div className="formGroup">
          <label>Confirm Password *</label>
          <input type="password" />
        </div>



        <button className="signupBtn">Create Account</button>

        <p className="loginLink">
          Already have an account? <span onClick={()=>{onLoginClick()}}>Log in</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;