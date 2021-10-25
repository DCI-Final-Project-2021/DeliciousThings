import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Form from "./pages/Forms";
import Navbar from "./components/Navbar";
import "./App.css";
import menu from "./menu.json";
import api from "./api/fetchDataFromDB";
import fake from "./faker/fakeOrder.js";
// import dotenv from "dotenv";
// dotenv.config();

function App() {
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("carts");
    return localData ? JSON.parse(localData) : [];
  });

  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(() => {
    const localData = localStorage.getItem("totalPrice");
    return localData ? JSON.parse(localData) : 0;
  });

  // const url = `${process.env.REACT_APP_API_SERVER}/orders`;
  const url = `http://localhost:2005/orders`;
  //url degisecek

  const addNewOrder = () => {
    fake.submitForm();
  };

  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    menu.map((item) => {
      return !categories.includes(item.category)
        ? categories.push(item.category)
        : null;
    });
    setCategories(categories);
  }, []);

  useEffect(() => {
    api.fetchDataFromDataBase(url).then((abc) => setProducts(abc));
  }, [url]);

  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(cart));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
  }, [cart]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar open={open} setOpen={setOpen} addNewOrder={addNewOrder} />
        <Switch>
          <Route exact path="/">
            <Home products={products} categories={categories} cart={cart} setCart={setCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice} open={open} />
          </Route>
          <Route path="/cart">
            <Cart cart={cart} setCart={setCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/form">
            <Form cart={cart} setCart={setCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
