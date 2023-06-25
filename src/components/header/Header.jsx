import React, { useState } from 'react';
import HeaderMiddle from './HeaderMiddle.jsx';
import Navbar from "./Navbar.jsx";
import "./header.css";
import HeaderTop from './HeaderTop.jsx';
export default function Header() {
  const [toggle,setToggle] = useState(false)
  return (
    <header className='header'>
    <HeaderTop setToggle={setToggle} toggle={toggle}/>
    <HeaderMiddle/>
    <Navbar toggle={toggle} setToggle={setToggle}/>
    </header>
  )
}
