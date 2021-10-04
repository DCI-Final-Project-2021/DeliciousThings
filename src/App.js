import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Korb from './pages/Korb';
import Login from './pages/Login';
import Home from './pages/Home';
import Form from './pages/Forms';
import Navbar from "./components/Navbar";
import './App.css';
import menu from "./menu.json";
import api from './api/fetchDataFromDB';

function App() {
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("carts");
    return localData ? JSON.parse(localData) : [];
  });

  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(() => {
    let total = 0;
    cart.map(item => {
      total += (item.price.slice(0, -1) * 1) * item.count;
      console.log(total);
      return total
    })
    console.log("map disi", total);
    return total;
  });
  const url = "http://localhost:2005/orders";
  //url degisecek

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    menu.map((item) => {
      return (
        !categories.includes(item.category)
        ? categories.push(item.category)
        : null
        )
    });
    setCategories(categories);
  }, []);

  useEffect(() => {
    api.fetchDataFromDataBase(url)
      .then(abc => setProducts(abc));
  }, [url]);

  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" > <Home products={products} categories={categories} cart={cart} setCart={setCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice} /> </Route>
          <Route path="/korb"> <Korb cart={cart} setCart={setCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice} /> </Route>
          <Route path="/login"> <Login /> </Route>
          <Route path="/form"> <Form cart={cart} totalPrice={totalPrice} /> </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
