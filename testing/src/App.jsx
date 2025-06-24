import React from 'react'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import './App.css'
import Home from './assets/Home'
import Test from './test'

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />} />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
