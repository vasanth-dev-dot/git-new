import React from 'react'
import './Login.css'

function Login() {
  return (
    <div>
      <from className="loginfrom">
        <h2>LOGIN</h2>
        <div><label>Email</label></div>
         <div><input type='email' placeholder='enter your email' /></div>
         <div><label>Password</label></div>
         <div><input type='password' placeholder='enter your password' /></div>

        <div className='loginsubmitbtn'>
            <button>login</button>
        </div>

      </from>
    </div>
  )
}

export default Login
