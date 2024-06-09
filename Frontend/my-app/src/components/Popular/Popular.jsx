import React from "react";
import './Popular.css'
import Item from "../Item/Item";
// we will import data from api calls
const Popular=()=>{
    return (
        <div className="popular">
            <h1>Popular Courses</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} rating={item.rating} views={item.views} duration={item.duration} />
                })}
            </div>
        </div>
    )
}

export default Popular;

// ended at 51:32
