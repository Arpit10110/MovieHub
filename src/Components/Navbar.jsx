import React from 'react'
import { Link } from 'react-router-dom'
import "../Style/Nav.css"
import menu from "../assets/menu.png"
import close from "../assets/close.png"
const Navbar = () => {
  function menuFun(){
    let menuBtn=document.querySelector(".menu");
    let main=document.querySelector(".main");
    menuBtn.style="display:none;"
    main.style="display:flex;"
  }
  function closefun(){
    if (window.innerWidth <= 430) {
      let menuBtn=document.querySelector(".menu");
      let main=document.querySelector(".main");
      menuBtn.style="display:block;"
      main.style="display:none;"
    }
  }
  return (
    <nav className='navbar'>
        <Link to="/"><h4 className='logoName'>Movie</h4></Link>
        <main className='main'>
        <img className='close'  onClick={closefun} src={close} alt="" />
            <Link onClick={closefun} className='nava'  to="/">Home</Link>
            <Link onClick={closefun} className='nava'  to="/Contact">Contact</Link>
        </main>
        <img onClick={menuFun}  className="menu" src={menu} alt="" />
    </nav>
  ) 
}

export default Navbar