import React from "react";

function Item({ item, cart, setCart }) {
  const addItemToCart = () => {
    cart.push(item);
    setCart(cart);
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
