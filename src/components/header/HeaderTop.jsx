import React from 'react';
import { AiFillPhone } from "react-icons/ai";
import { BsFillXCircleFill, BsPersonCircle } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import "./header.css";
const HeaderTop=({setToggle,toggle})=>{
    return(
        <>
            <div className='header-top'>
            <div onClick={()=> setToggle(prev => !prev)} className='header-top-menu'>
             {toggle ?<BsFillXCircleFill/>:<HiMenu/> }
            </div>
            <div className='header-top-phone'>
            <AiFillPhone/>
            123-456-789
            </div>
            <div className="header-top-text">
                Welcome To Online Book Store
            </div>
            <div className="header-top-link">
                <BsPersonCircle/>
                    Login
            </div>
        </div>
        </>
    )
}
export default HeaderTop

