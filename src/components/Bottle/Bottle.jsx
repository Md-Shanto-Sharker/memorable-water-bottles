import React from 'react';
import './Bottle.css'
const Bottle = ({bottle,handleAddToCart}) => {
    const {img,price,name,stock} = bottle
    console.log(bottle);
    return (
        <div className='card'>
            <img style={{width: 150}} src={img} alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <p>{stock} remaining</p>
            <button onClick={()=>handleAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;