import React,{useState} from 'react'
import './Home.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Login from './Login'
import Register from './Register'
import { use } from 'react'
import Product from './Product'
import Frames from './Frames'

function Home() {
    const [showLogin , setshowLogin] = useState(false);

    const Forloginone = ()=>{
        setshowLogin(true)
        setshowsignin(false)
         setshowproduct(false)
        setshowframs(false)
    }

    const [showsignin , setshowsignin] = useState(false)

    const Forsigninone = ()=>{
        setshowsignin(true);
        setshowLogin(false)
         setshowproduct(false)
        setshowframs(false)
    }

    const [showproduct , setshowproduct] = useState(false)

    const Forproductone = ()=>{
        setshowsignin(false);
        setshowLogin(false)
        setshowproduct(true)
        setshowframs(false)
    }

      const [showframs , setshowframs] = useState(false)

    const Forframsone = ()=>{
        setshowsignin(false);
        setshowLogin(false)
        setshowproduct(false)
        setshowframs(true)
    }
  return (
    <div>
      <Navbar Forloginone = {Forloginone}  Forsigninone = {Forsigninone} />
      <div className='combinecontent'>
        <Sidebar Forproductone = {Forproductone} Forframsone={Forframsone} />
        { showLogin && <Login /> }
        {showsignin && <Register />}
        {showproduct && <Product />}
        {showframs && <Frames />}
      </div>
    </div>
  )
}

export default Home
