import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../api/fetchDataFromDB";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Forms({ cart, totalPrice }) {
  const INITIAL_USER = { name: "", surname: "", email: "", tel: "", address: "", city: ""};
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
    console.log("giwe," , isFieldsMissing);
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
        console.log("Olusturulan yeni kullanici:", updatedOrder);
        api.addOrderToCustomer(updatedOrder).then((result) => {
          console.log("Customer a siparis eklenmis mi:", result);
        });
      });
    } catch (err) {
      console.log({ err });
    }

    history.push("/");
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <img src="./images/fill_form.png" alt="fill_form"></img>
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
