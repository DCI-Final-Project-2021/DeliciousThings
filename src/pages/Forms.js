import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../api/fetchDataFromDB";

function Forms({ cart, totalPrice }) {
  const [customerData, setCustomerData] = useState({
    name: "",
    surname: "",
    email: "",
    tel: "",
    address: "",
    city: "",
  });
  const [order, setOrder] = useState({
    food: [...cart],
    customerId: "",
    total: totalPrice,
  });

  let history = useHistory();

  const submitForm = () => {
    api.createNewCustomer(customerData).then((result) => {
      const updatedOrder = { ...order, customerId: result._id };
      setOrder(updatedOrder);
      console.log("Olusturulan yeni kullanici:", updatedOrder);
      api.addOrderToCustomer(updatedOrder).then((result) => {
        console.log("Customer a siparis eklenmis mi:", result);
      });
    });

    history.push("/");
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={customerData.name}
            onChange={(e) =>
              setCustomerData({ ...customerData, name: e.target.value })
            }
          />
        </label>
        <label>
          Surname:
          <input
            type="text"
            name="surname"
            value={customerData.surname}
            onChange={(e) =>
              setCustomerData({ ...customerData, surname: e.target.value })
            }
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={customerData.email}
            onChange={(e) =>
              setCustomerData({ ...customerData, email: e.target.value })
            }
          />
        </label>
        <label>
          Telefonnummer:
          <input
            type="text"
            name="telefon"
            value={customerData.tel}
            onChange={(e) =>
              setCustomerData({ ...customerData, tel: e.target.value })
            }
          />
        </label>
        <label>
          Adress:
          <input
            type="text"
            name="adress"
            value={customerData.address}
            onChange={(e) =>
              setCustomerData({ ...customerData, address: e.target.value })
            }
          />
        </label>
        <label>
          City:
          <input
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
          <p>ID: {order.customerId}</p>
        </label>
      </form>
    </div>
  );
}

export default Forms;
