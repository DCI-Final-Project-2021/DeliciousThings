import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
// import fake from "../faker/fakeOrder.js";

function Navbar({ open, setOpen, addNewOrder }) {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--open", !open);
  }, [open]);

  // bu useEffect kontrol edilecek

  

  return (
    <nav>
      <div className="logo">Liferando</div>
      <ul className={open ? "nav-links open" : "nav-links close"}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
        {/* <li>
          <NavLink to="/login">Login</NavLink>
        </li> */}
        <li>
          <a href="">
            <i className="fas fa-plus" onClick={addNewOrder}></i>
          </a>
        </li>
      </ul>

      <div className="styledBurger" onClick={() => setOpen(!open)}>
        <div className={open ? "rot1 bg-color" : "basic"} />
        <div className={open ? "rot2 bg-color" : "basic"} />
        <div className={open ? "rot3 bg-color" : "basic"} />
      </div>
    </nav>
  );
}

export default Navbar;
