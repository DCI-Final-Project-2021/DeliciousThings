import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Switch } from "react-router-dom"; 
import Korb from './pages/Korb';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Navbar />
 <Switch>
<Route exact path="/" > <Home /> </Route>
<Route path="/korb"> <Korb /> </Route>
<Route path="/login"> <Login /> </Route>

</Switch> 
</BrowserRouter>
</div> 
  );
}

export default App;