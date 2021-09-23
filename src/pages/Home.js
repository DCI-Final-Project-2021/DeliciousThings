import React, { useState, useEffect } from "react";
import Category from "../components/Category";
import menu from "../menu.json";

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    menu.map((item) => {
      !categories.includes(item.category)
        ? categories.push(item.category)
        : null;
      console.log(categories);
    });
    setCategories(categories);
  }, []);

  return (
    <div>
      {categories.map((category) => {
        return <Category category={category} />;
      })}
    </div>
  );
}

export default Home;
