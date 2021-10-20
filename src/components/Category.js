import React from "react";
import Item from "./Item";
import menu from "../menu.json";

function Category({ category, cart, setCart, totalPrice, setTotalPrice }) {
  return (
    <div className="category">
      {/* //buraya resim ekle */}
      <h1>{category}</h1>
      <div className="items">
        {menu.map((item, i) => {
          return (
            item.category === category && (
              <Item
                key={i}
                item={item}
                cart={cart}
                setCart={setCart}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
              />
            )
          );
        })}
      </div>
    </div>
  );
}

export default Category;
