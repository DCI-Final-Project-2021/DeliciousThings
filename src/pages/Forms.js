import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../api/fetchDataFromDB";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { io } from "socket.io-client";
import dotenv from "dotenv";
dotenv.config();

function Forms({ cart, setCart, totalPrice, setTotalPrice }) {
  const INITIAL_USER = {
    name: "",
    surname: "",
    email: "",
    tel: "",
    address: "",
    city: "",
  };
  const [customerData, setCustomerData] = useState(INITIAL_USER);
  const [order, setOrder] = useState({
    food: [...cart],
    userId: "",
    customerId: "",
    total: totalPrice,
  });

  let history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();
    const isFieldsMissing = Object.keys(INITIAL_USER).some(
      (key) => customerData[key] === ""
    );
    if (isFieldsMissing) {
      toast.error(" All fields are required...");
      return;
    }

    try {
      api.createNewCustomer(customerData).then((result) => {
        const updatedOrder = {
          ...order,
          customerId: result._id,
          userId: result.user,
        };
        setOrder(updatedOrder);
        api.addOrderToCustomer(updatedOrder).then((result) => {
          api.getOrderById(result._id).then((order) => {
            // let socket = io("https://order-driver-tracking.herokuapp.com");
            // let socket = io("http://localhost:2006");
            let socket = io(process.env.PORT);
            socket.emit("cart", order);
          });
          return result;
        });
        toast.success("Your order has been sent...");
        setCart([]);
        setTotalPrice(0);
        localStorage.setItem("totalPrice", JSON.stringify(0));
        setCustomerData(INITIAL_USER);
      });
    } catch (err) {
      console.log({ err });
      toast.error("Something went wrong...");
    }

    setTimeout(() => {
      history.push("/");
    }, 3000);
  };

  return (
    <div className="forms">
      <img src="./images/fill_form.png" alt="fill_form"></img>
      <form onSubmit={submitForm}>
        <h5>Fill out the form to complete the order.</h5>
        <label>
          <input
            placeholder="Name"
            type="text"
            name="name"
            value={customerData.name}
            onChange={(e) =>
              setCustomerData({ ...customerData, name: e.target.value })
            }
          />
        </label>
        <label>
          <input
            placeholder="Surname"
            type="text"
            name="surname"
            value={customerData.surname}
            onChange={(e) =>
              setCustomerData({ ...customerData, surname: e.target.value })
            }
          />
        </label>
        <label>
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={customerData.email}
            onChange={(e) =>
              setCustomerData({ ...customerData, email: e.target.value })
            }
          />
        </label>
        <label>
          <input
            placeholder="Phone"
            type="text"
            name="telefon"
            value={customerData.tel}
            onChange={(e) =>
              setCustomerData({ ...customerData, tel: e.target.value })
            }
          />
        </label>
        <label>
          <input
            placeholder="Address"
            type="text"
            name="adress"
            value={customerData.address}
            onChange={(e) =>
              setCustomerData({ ...customerData, address: e.target.value })
            }
          />
        </label>
        <label>
          <input
            placeholder="City"
            type="text"
            name="city"
            value={customerData.city}
            onChange={(e) =>
              setCustomerData({ ...customerData, city: e.target.value })
            }
          />
        </label>
        <label>
          <input type="submit" value="Submit" />
        </label>
      </form>
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

export default Forms;
