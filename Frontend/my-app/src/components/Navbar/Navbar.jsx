import React, { useState } from "react";
import { Link } from "react-router-dom"; // Correctly import Link from react-router-dom
import './Navbar.css';
import logo from '../Asserts/logo.png';
import search from '../Asserts/search_logo.svg';
import cart from '../Asserts/cart-logo.svg';

const Navbar = () => {
    const [menu, setMenu] = useState("home");

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul className="nav-menu">
                <li onClick={() => setMenu("home")}>
                    <Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu === "home" ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu("courses")}>
                    <Link style={{textDecoration:'none'}} to='/courses'>Courses</Link>{menu === "courses" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("about")}>
                    <Link style={{textDecoration:'none'}} to='/about'>About</Link>{menu === "about" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("contact")}>
                    <Link style={{textDecoration:'none'}} to='/contact'>Contact</Link>{menu === "contact" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("admin")}>
                    <Link style={{textDecoration:'none'}} to='/admin'>Admin</Link>{menu === "admin" ? <hr /> : null}
                </li>
            </ul>
            <div className="nav-login-cart">
                <img src={search} alt="Search" />
                <Link to="/cart"><img src={cart} alt="Cart" /></Link>
                <div className="nav-cart-count">0</div>
                <Link to="/login"><button className="sign-in">Login</button></Link>

            </div>
        </div>
    );
};

export default Navbar;
