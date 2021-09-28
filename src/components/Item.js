import React from "react";

function Item({ item }) {
  return (
    <div >
      <div className="item">
        <h6>{item.name}</h6>
        <img src={item.image} alt="123"></img>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default Item;
