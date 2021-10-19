import React from "react";
import { useHistory } from "react-router-dom";

function EmptyCart() {
  let history = useHistory();

  const viewHome = () => {
    history.push("/");
  };

  return (
    <div className="cart">
      <div>
        <img src="./images/empty_cart.png" alt="empty_cart"></img>
      </div>
      <p>There are no items in your shopping cart.</p>
      <input type="submit" onClick={viewHome} value="Home Page"></input>
    </div>
  );
}

export default EmptyCart;
