// import React, { useState } from "react";
import React from "react";

function Item({ item, cart, setCart, totalPrice, setTotalPrice }) {
  // const [inCart, setInCart] = useState(() => {
  //   cart.filter((e) => e.name === item.name).length > 0 ? true : false;
  // });
  // console.log("hier", cart.filter(e => e.name === item.name).length > 0);

  const addItemToCart = () => {
    let objIndex = cart.findIndex((obj) => obj.name === item.name);

    if (objIndex === -1) {
      item.count = 1;
      setCart([...cart, item]);
      setTotalPrice(totalPrice + item.price.slice(0, -1) * 1);
    } else {
      cart[objIndex].count += 1;
      const newCart = [...cart];
      setCart(newCart);
    }
    // setInCart(true);
  };

  return (
    <div className="item">
      <img src={item.image} alt="resim aciklamasi"></img>
      <div className="detail">
        <h6>{item.name}</h6>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <button onClick={addItemToCart}>
          {false ? "In Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default Item;
