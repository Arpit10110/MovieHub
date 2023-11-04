import React from 'react'
import {HashRouter as Router, Route,Routes} from "react-router-dom"
import "./Style/Style.css"
import Navbar from "./Components/Navbar.jsx"
import Home from "./Components/Home.jsx"
import Footer from './Components/Footer'
import Contact from './Components/Contact'
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}
export default App