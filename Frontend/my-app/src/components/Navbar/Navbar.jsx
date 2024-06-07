import React from "react";
import './Navbar.css' 
import logo from '../Asserts/logo.png'
import search from '../Asserts/search_logo.svg'
import cart from '../Asserts/cart-logo.svg'
const Navbar=()=>{
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo}></img>
                <p>ELearning</p>
            </div>
            <ul className="nav-menu">
                <li>Home</li>
                <li>Courses</li>
                <li>About</li>
                <li>Contact</li>
                <li>Admin</li>

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