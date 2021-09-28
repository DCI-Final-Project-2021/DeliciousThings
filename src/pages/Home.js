import React from "react";
import Category from "../components/Category";

function Home({categories}) {

  return (
    <div>
      {categories.map((category, i) => {
        return <Category category={category} key={i} />;
      })}
    </div>
  );
}

export default Home;
