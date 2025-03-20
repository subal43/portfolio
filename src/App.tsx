// import { useState } from 'react'

import './App.css'
import { Portfolio } from "../pages/main"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Contact } from '../pages/contact'
import "./index.css"




function App() {


  return (
    <>
    <BrowserRouter >
    <Routes>
        <Route path="/" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
       
        
        
       
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
