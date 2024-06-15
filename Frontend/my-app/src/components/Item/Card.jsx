import React from 'react';
import './Card.css';

export default function Card({ course }) {
    
    const { name, image, old_price, new_price, rating, views , duration } = course;

    return (
        <div className='card cards-item'>
            <img src={image} alt={name} />
            <div>
                <div className='name'>
                    {name}
                </div>
                <div className='rating'>
                    {rating}
                </div>
                <div className='down-part'>
                    <div className='price'>
                        <span> {new_price} </span>
                        <span> {old_price} </span>
                        <span> {views} </span>
                    </div>
                    <div className='duration'>
                        <span> {duration} </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
