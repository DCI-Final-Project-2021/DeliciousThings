import React from "react";

function Item({ item, cart, setCart }) {
  const addItemToCart = () => {
    
    let objIndex = cart.findIndex((obj) => obj.name === item.name);
    
    if (objIndex === -1) {
      item.count = 1;
      setCart([...cart, item]);
    } else {
      cart[objIndex].count += 1;
      const newCart = [...cart];
      setCart(newCart);
    }
  };

  return (
    <div>
      <div className="item">
        <h6>{item.name}</h6>
        <img src={item.image} alt="resim aciklamasi"></img>
        <button onClick={addItemToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Item;
