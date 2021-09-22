import React, { useState, useEffect } from "react";
// import category from "../components/category";
import menu from "../menu.json";

function Home() {
  const [categories, setCategories] = useState([]);

  const cate = [ "burger"]

  useEffect(() => {
    menu.map((item) => {
      !categories.includes(item.category) ? categories.push(item.category) : null;
      setCategories(categories);
      console.log(categories)
    });
  }, []);

  return (
    <div>
      {categories.map((category) => {
        return <h2>{category}</h2>;
      })}
    </div>
  );
}

export default Home;
