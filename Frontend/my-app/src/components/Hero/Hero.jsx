import React from "react";
import './Hero.css'
import search from '../Asserts/search_logo.svg';
import arrow from "../Asserts/arrow-right-solid.svg"
import hero_img from "../Asserts/hero_img.jpg"

const Hero=()=>{
    return (
        <div className="hero">
            <div className="hero-left">
                <h1>Access Expert Knowledge </h1>
                <h1>Anywhere, Anytime.</h1>
                <div className="explore">
                    <img src= {search} alt="Search"/>
                    <input type="text" name="" id="" placeholder="what do you want to learn today"/>
                    <button type="search" >Search</button>
                </div>
                <div className="hero-popular-btn">
                    <div>Popular Courses</div>
                    <img className="arrow" src={arrow} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_img}></img>
            </div>

        </div>
        
    )
}

export default Hero 