import React   from "react";
import './Navbar.css' 
import logo from '../Asserts/logo.png'
import search from '../Asserts/search_logo.svg'
import cart from '../Asserts/cart-logo.svg'
import { useState } from 'react';
const Navbar=()=>{
    const [menu ,setMenu]=useState("home");
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo}></img>
                <p>ELearning</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("home")}}>Home{menu==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Courses")}}>Courses{menu==="courses"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("About")}}>About{menu==="about"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Contact")}}>Contact{menu==="contact"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Admin")}}>Admin{menu==="admin"?<hr/>:<></>}</li>

            </ul>
            <div className="nav-login-cart">
                <img src={search}/>
                <button className="sign-in">Sign In</button>
                <button className="sign-up">Sign Up</button>
                <img src={cart}></img>
                <div className="nav-cart-count">0</div>
            </div>

            

        </div>
    )
}
export default Navbar