import React from "react";
import Category from "../components/Category";

function Home({ categories, cart, setCart, totalPrice, setTotalPrice }) {

  return (
    <div>
      {categories.map((category, i) => {
        return <Category key={i} category={category} cart={cart} setCart={setCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />;
      })}
    </div>
  );
}

export default Home;
