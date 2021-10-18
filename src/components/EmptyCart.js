import React from "react";
import { useHistory } from "react-router-dom";
import Leer from "../components/leer.js";

function EmptyCart() {
  let history = useHistory();

  const viewHome = () => {
    history.push("/");
  };

  return (
    <div className="cart">
      <div>
        <Leer />
      </div>
      <p>There are no items in your shopping cart.</p>
      <input type="submit" onClick={viewHome} value="Home Page"></input>
    </div>
  );
}

export default EmptyCart;
