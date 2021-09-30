import React from "react";
import Leerkorb from "../components/Leerkorb";
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
          <h4>Alışveriş Sepetiniz</h4>
          <div className="carts-sub-div">
            <div className="carts-items">
              {cart.map((item, i) => {
                return (
                  <div className="cart-item">
                    <h6>{i+1}. {item.name}</h6>
                  </div>
                );
              })}
            </div>
            <div className="summary">
              <h6>Siparis özetiniz</h6>
              <p>Toplam tutar: <span>50$</span></p>
              <input
                type="submit"
                onClick={viewForm}
                value="Sipariş ver"
              ></input>
            </div>
          </div>
        </div>
      ) : (
        <Leerkorb />
      )}
    </div>
  );
}

export default Korb;
