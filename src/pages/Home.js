import React from "react";
import Category from "../components/Category";

function Home({ categories, cart, setCart }) {

  return (
    <div>
      {categories.map((category, i) => {
        return <Category key={i} category={category} cart={cart} setCart={setCart} />;
      })}
    </div>
  );
}

export default Home;
