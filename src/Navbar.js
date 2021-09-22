import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

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
        <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
      </nav>
    </div>
  );
}

export default Navbar;
