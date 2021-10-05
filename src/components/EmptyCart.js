import React from "react";
import { useHistory } from "react-router-dom";

function EmptyCart() {
  let history = useHistory();

  const viewHome = () => {
    history.push("/");
  };

  return (
    <div className="leerkorb">
      <div>Buraya bakarlar.</div>
      <p>Sepetinizde henüz bir ürün yoktur.</p>
      <input type="submit" onClick={viewHome} value="Alışverişe Başla"></input>
    </div>
  );
}

export default EmptyCart;
