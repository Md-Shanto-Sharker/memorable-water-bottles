import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addItemToCartLocalStorage, getCartFromLocalStorage } from "../../utilities/localStorage";


const Bottles = ({ bottlesPromise }) => {

  const [cart, setCart] = useState([]);

  const bottles = use(bottlesPromise);
  // useEffect
  useEffect(()=>{
    const storedCartIds = getCartFromLocalStorage();
    // console.log(storedCartIds,bottles);
    const storedCart = [];
     for(const id of storedCartIds){
      const cartBottle = bottles.find(bottle =>bottle.id===id);
      if(cartBottle){
        storedCart.push(cartBottle)
      }
     }
    //  console.log('stored cart',storedCart);
    setCart(storedCart)
  },[bottles])


  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    // Save the bottle id in the LocalStorage
    addItemToCartLocalStorage(bottle.id)
  };
  return (
    <div>
      <h3>Bottles : {bottles.length}</h3>
        <p>Added to cart : {cart.length}</p>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handleAddToCart={handleAddToCart}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
