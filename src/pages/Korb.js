import React from "react";
import LeerKorb from "../components/LeerKorb";

function Korb({ cart }) {
  return (
    <div>
      {cart ? (
        <div className="carts">
          <h1>Alisveris Sepeti</h1>
          <div className="xyz">
            <div>
              {cart.map((item) => {
                return (
                  <div className="cart-item">
                    <h6>{item}</h6>
                  </div>
                );
              })}
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
