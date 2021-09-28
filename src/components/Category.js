import React from "react";
import Item from "./Item";
import menu from "../menu.json";

function Category({ category }) {
  return (
    <div className="category">
      <h1>{category}</h1>
      <div className="items">
        {menu.map((item, i) => {
          return item.category === category ? <Item item={item} key={i} /> : null;
        })}
      </div>
    </div>
  );
}

export default Category;
