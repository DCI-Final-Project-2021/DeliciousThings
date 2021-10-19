import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar({ open, setOpen, addNewOrder }) {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--open", !open);
  }, [open]);

  // bu useEffect kontrol edilecek

  const toggleOpen = () => {
    setOpen(!open);
  }
  return (
    <nav>
      <div className="logo">Delicious Things</div>
      <ul className={open ? "nav-links open" : "nav-links close"}>
        <li>
          <NavLink to="/" onClick={() => {setOpen(false)}}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/cart" onClick={() => {setOpen(false)}}>Cart</NavLink>
        </li>
        {/* <li>
          <NavLink to="/login">Login</NavLink>
        </li> */}
        <li>
          <i className="fas fa-plus" onClick={addNewOrder}></i>
        </li>
      </ul>

      <div className="styledBurger" onClick={toggleOpen}>
        <div className={open ? "rot1 bg-color" : "basic"} />
        <div className={open ? "rot2 bg-color" : "basic"} />
        <div className={open ? "rot3 bg-color" : "basic"} />
      </div>
    </nav>
  );
}

export default Navbar;
