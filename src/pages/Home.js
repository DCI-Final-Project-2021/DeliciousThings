import React from "react";
import Category from "../components/Category";

function Home({ categories, cart, setCart, totalPrice, setTotalPrice, open }) {

  return (
    <div className={open ? "hide" : ""}>
      {categories.map((category, i) => {
        return <Category key={i} category={category} cart={cart} setCart={setCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />;
      })}
    </div>
  );
}

export default Home;
