import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Korb from "./pages/Korb";
import Login from "./pages/Login";
import Home from "./pages/Home";
import api from "./api/fetchDataFromDB";
import "./App.css";

function App() {
  // const [cart, setCart] = useState([]);
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("carts");
    return localData ? JSON.parse(localData) : [];
  });

  const [products, setProducts] = useState([]);

  const url = "http://localhost:2005/orders";
  //url degisecek

  useEffect(() => {
    api.fetchDataFromDataBase(url).then((abc) => setProducts(abc));
  }, []);

  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(cart));
  }, [cart]);

  console.log(products);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {" "}
            <Home products={products} cart={cart} setCart={setCart} />{" "}
          </Route>
          <Route path="/korb">
            {" "}
            <Korb cart={cart} />{" "}
          </Route>
          <Route path="/login">
            {" "}
            <Login />{" "}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
