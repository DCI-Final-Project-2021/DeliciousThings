import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
  const root = document.documentElement;
  root.style.setProperty('--open', !open)
  }, [open])

  // bu useEffect kontrol edilecek

  return (
    <div>
      <nav>
        <div className="logo">Liferando</div>
        <ul
          className="nav-links"
          style={{ transform: open ? "translateX(0px)" : "translateX(-100%)" }}
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/korb">Korb</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
       
        <div className="styledBurger" onClick={() => setOpen(!open)}>
          <div className={open ? "rot1 bg-color" : "basic"} />
          <div className={open ? "rot2 bg-color" : "basic"} />
          <div className={open ? "rot3 bg-color" : "basic"} />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
