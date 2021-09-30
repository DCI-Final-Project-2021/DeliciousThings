import React from "react";
import Category from "../components/Category";

function Home({categories, cart, setCart}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    menu.map((item) => {
      return !categories.includes(item.category)
        ? categories.push(item.category)
        : null;
    });
    setCategories(categories);
  }, []);

  return (
    <div>
      {categories.map((category, i) => {
        return <Category key={i} category={category} cart={cart} setCart={setCart} />;
      })}
    </div>
  );
}

export default Home;
