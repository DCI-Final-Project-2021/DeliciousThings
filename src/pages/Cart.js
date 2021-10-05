import React from "react";
import EmptyCart from "../components/EmptyCart";
import { useHistory } from "react-router-dom";

function Cart({ cart, setCart, totalPrice, setTotalPrice }) {
  let history = useHistory();
  
  const viewForm = () => {
    history.push("/form");
  };

  const azalt = (item, i) => {
    if (cart[i].count > 1) {
      cart[i].count -= 1;
      const newCart = [...cart];
      setCart([...newCart]);
      setTotalPrice(totalPrice - (item.price.slice(0, -1) * 1))
    }
    console.log("azalt fonksiyon", item.name);
  };

  const arttir = (item, i) => {
    cart[i].count += 1;
    const newCart = [...cart];
    setCart([...newCart]);
    setTotalPrice(totalPrice + (item.price.slice(0, -1) * 1))
    console.log("arttir fonksiyon", item.name);
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
                  <div className="cart-item" key={i}>
                    <p>
                      {i + 1}. {item.name}
                    </p>
                    <button onClick={() => azalt(item, i)}>-</button>
                    <button onClick={() => arttir(item, i)}>+</button>
                    <p className="gecici">Adet: {item.count}</p>
                    <p>Fiyat: {item.price.slice(0, -1) * item.count}€</p>
                  </div>
                );
              })}
            </div>
            <div className="summary">
              <h6>Siparis özetiniz</h6>
              <p>
                Toplam tutar: <span>{totalPrice}€</span>
              </p>
              <input
                type="submit"
                onClick={viewForm}
                value="Sipariş ver"
              ></input>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default Cart;
