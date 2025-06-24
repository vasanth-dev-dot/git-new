import React from 'react'
import './Sidebar.css'

function Sidebar({Forproductone , Forframsone}) {
  return (
    <div className='sidebarcontainer'>
        <ul>
            <li onClick={Forproductone}>Abb Product</li>
            <li onClick={Forframsone}>Add Frams</li>
        </ul>
    </div>
  )
}

export default Sidebar
