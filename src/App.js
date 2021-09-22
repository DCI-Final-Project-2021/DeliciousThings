import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Switch } from "react-router-dom"; 
import Korb from './components/Korb';
import Login from './components/Login';
import Home from './components/Home';

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