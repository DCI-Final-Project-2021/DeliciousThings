import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Navbar({ open, setOpen, addNewOrder }) {
  let history = useHistory();
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--open", !open);
  }, [open]);

  const toggleOpen = () => {
    setOpen(!open);
  };
  const viewHome = () => {
    history.push("/");
  };

  const randomOrder = () => {
    try {
      addNewOrder();
      toast.success("A random order was sent...");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong...");
    }
  };

  return (
    <div>
      <nav>
        <h2 className="logo" onClick={viewHome}>
          Delicious Things
        </h2>
        <ul className={open ? "nav-links open" : "nav-links close"}>
          <li>
            <NavLink
              to="/"
              onClick={() => {
                setOpen(false);
              }}
            >
              Home
            </NavLink>
          </li>
          {/* <li>
          <NavLink to="/" onClick={() => {setOpen(false)}}>Categories</NavLink>
        </li> */}
          <li>
            <NavLink
              to="/cart"
              onClick={() => {
                setOpen(false);
              }}
            >
              Cart
            </NavLink>
          </li>
          {/* <li>
          <NavLink to="/login">Login</NavLink>
        </li> */}
          <li>
            <i className="fas fa-plus" onClick={randomOrder}></i>
          </li>
        </ul>

        <div className="styledBurger" onClick={toggleOpen}>
          <div className={open ? "rot1 bg-color" : "basic"} />
          <div className={open ? "rot2 bg-color" : "basic"} />
          <div className={open ? "rot3 bg-color" : "basic"} />
        </div>
      </nav>
      <ToastContainer
        theme="colored"
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Navbar;
