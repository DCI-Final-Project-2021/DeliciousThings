import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Korb from './pages/Korb';
import Login from './pages/Login';
import Home from './pages/Home';
import api from './api/fetchDataFromDB';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  const url = "http://localhost:2005/orders";
  //url degisecek

  useEffect(() => {
    api.fetchDataFromDataBase(url)
      .then(abc => setProducts(abc));
  }, []);

  console.log(products);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" > <Home products={products} /> </Route>
          <Route path="/korb"> <Korb /> </Route>
          <Route path="/login"> <Login /> </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;