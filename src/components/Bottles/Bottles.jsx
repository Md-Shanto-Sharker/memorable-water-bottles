import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
const Bottles = ({bottlesPromise}) => {
    const [cart,setcart] = useState([])

    const handleAddToCart =(bottle)=>{
        const newCart = [...cart,bottle];
        setcart(newCart)
    }
    const bottles = use(bottlesPromise);
    // console.log(bottles);
    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <p>Added to cart:{cart.length}</p>
            <div className='layout'>
            {
                bottles.map(bottle =><Bottle handleAddToCart={handleAddToCart} key={bottle.id} bottle={bottle}></Bottle>)
            }
            </div>
            
        </div>
    );
};

export default Bottles;