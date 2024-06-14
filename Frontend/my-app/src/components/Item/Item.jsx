import React from "react";
import './Item.css'
import star from '../Asserts/star-regular.svg';
import views from '../Asserts/eye-regular.svg';
import time from '../Asserts/clock-regular.svg';

const Item=(props)=>{
    return(
        <div className="item">
            <img src={props.image} alt=""></img>
            {/* course Name */}
            <p>{props.name}</p>
            <p>{props.instructor}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    ${props.new_price}
                </div>
                <div className="item-price-new">
                    ${props.old_price}
                </div>
            </div>
            <div className="course_review">
                <img src={star} alt="" className="" />
                <p>{props.rating}</p>
                <img src={views} alt="" className="" />
                <p>{props.views}</p>
                <img src={time} alt="" className="" />
                <p>{props.duration}</p>
            </div>
            
        </div>
    )
}

export default Item