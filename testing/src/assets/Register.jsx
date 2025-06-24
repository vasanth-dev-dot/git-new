import React from 'react'
import './Register.css'

function Register() {
  return (
    <div>
      <form className='fromregisterone'>
        <h2>SIGNUP</h2>
        <div><label>User name</label></div>
        <div><input type="text" placeholder='enter your name'/></div>

        <div><label>Email</label></div>
        <div><input type="email" placeholder='enter your email'/></div>

        <div><label>Password</label></div>
        <div><input type="password" placeholder='enter your password'/></div>

        <div><label>Phone No</label></div>
        <div><input type="text" placeholder='enter your phoneno'/></div>

        <div className="fromsubmitbtn">
            <button>Register</button>
        </div>
      </form>
    </div>
  )
}

export default Register
