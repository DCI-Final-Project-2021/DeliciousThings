import React from "react";
import EmptyCart from "../components/EmptyCart";
import { useHistory } from "react-router-dom";

function Cart({ cart, setCart, totalPrice, setTotalPrice }) {
  let history = useHistory();
  const viewForm = () => {
    history.push("/form");
  };

  const reduceAmount = (item, i) => {
    if (cart[i].count > 1) {
      cart[i].count -= 1;
      const newCart = [...cart];
      setCart([...newCart]);
      setTotalPrice(totalPrice - item.price.slice(0, -1) * 1);
    }
  };

  const increaseAmount = (item, i) => {
    cart[i].count += 1;
    const newCart = [...cart];
    setCart([...newCart]);
    setTotalPrice(totalPrice + item.price.slice(0, -1) * 1);
  };

  const deleteItem = (i) => {
    cart.splice(i, 1);
    const newCart = [...cart];
    setCart([...newCart]);
  };

  return (
    <div>
      {cart.length > 0 ? (
        <div className="carts">
          <h4>Your Shopping Cart</h4>
          <div className="carts-sub-div">
            <div className="carts-items">
              <div className="cart-header">
                <p>Item</p>
                <p>Count</p>
                <p>Price</p>
                <p>Del</p>
              </div>
              {cart.map((item, i) => {
                return (
                  <div className="cart-item" key={i}>
                    <p>
                      {i + 1}. {item.name}
                    </p>
                    <div className="count-item">
                      <button onClick={() => reduceAmount(item, i)}>-</button>
                      <p>{item.count}</p>
                      <button onClick={() => increaseAmount(item, i)}>+</button>
                    </div>
                    <p>{item.price.slice(0, -1) * item.count}€</p>
                    <button onClick={() => deleteItem(i)}>X</button>
                  </div>
                );
              })}
            </div>
            <div className="summary">
              <h6>Your order summary</h6>
              <p>
                Total price: <span>{totalPrice}€</span>
              </p>
              <input type="submit" onClick={viewForm} value="Order now"></input>
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
