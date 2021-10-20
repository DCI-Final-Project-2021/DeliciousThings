import React from "react";
import { useHistory } from "react-router-dom";

function Item({ item, cart, setCart, totalPrice, setTotalPrice }) {
  let history = useHistory();

  const inCart = cart.find((e) => e.name === item.name) ? true : false;

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
      setTotalPrice(totalPrice + item.price.slice(0, -1) * 1);
    }
  };

  const redirectToCart = () => {
    history.push("/cart");
  };
  return (
    <div className="item">
      <img src={item.image} alt="resim aciklamasi"></img>
      <div className="detail">
        <h6>{item.name}</h6>
        <p>
          {item.description}
          {/* Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. */}
        </p>
        {inCart ? (
          <button onClick={redirectToCart} className="goCart">
            Go to Cart
          </button>
        ) : (
          <button onClick={addItemToCart}>Add to Cart</button>
        )}
        {inCart && <span>This product is in your cart.</span>}
      </div>
    </div>
  );
}

export default Item;
