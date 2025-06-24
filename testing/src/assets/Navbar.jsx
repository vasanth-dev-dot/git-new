import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

function Navbar({Forloginone , Forsigninone}) {
      const navigate = useNavigate();
  return (
    <div>
      <nav>
        <h1 onClick={()=>{
          navigate('/')
        }}>Vasanth Project</h1>
        <div>
        <button onClick={Forloginone}>Login</button>&emsp;&nbsp;
        <button onClick={Forsigninone}>Register</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
