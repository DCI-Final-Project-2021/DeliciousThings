import React from "react";
import LeerKorb from "../components/Leerkorb";
import { useHistory } from "react-router-dom";

function Korb({ cart }) {
  let history = useHistory();

  const viewForm = () => {
    history.push("/form");
  };

  return (
    <div>
      {cart.length > 0 ? (
        <div className="carts">
          <h1>Alisveris Sepeti</h1>
          <div className="xyz">
            <div>
              {cart.map((item) => {
                return (
                  <div className="cart-item">
                    <h6>{item.name}</h6>
                  </div>
                );
              })}
              <input type="submit" onClick={viewForm}></input>
            </div>
            <div>buraya özet</div>
          </div>
        </div>
      ) : (
        <LeerKorb />
      )}
    </div>
  );
}

export default Korb;
