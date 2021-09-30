import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function Forms() {
  const [customerData, setCustomerData] = useState({
      name: "",
      surname: "",
      email: "",
      detail: "",
      tel: "",
      address: "",
      city: "",
  });

  let history = useHistory();

  const submitForm = () => {
    const url = `http://localhost:2005/orders`;
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(customerData),
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((result) => console.log("Gönderilen Order", result));

    history.push("/");
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label>
          Name:
          <input type="text" name="name" value={customerData.name} onChange={(e)=> setCustomerData({...customerData, name:e.target.value})} />
        </label>
        <label>
          Surname:
          <input type="text" name="surname" value={customerData.surname} onChange={(e)=> setCustomerData({...customerData, surname:e.target.value})} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={customerData.email} onChange={(e)=> setCustomerData({...customerData, email:e.target.value})} />
        </label>
        <label>
          Telefonnummer:
          <input type="text" name="telefon" value={customerData.tel} onChange={(e)=> setCustomerData({...customerData, tel:e.target.value})} />
        </label>
        <label>
          Adress:
          <input type="text" name="adress" value={customerData.address} onChange={(e)=> setCustomerData({...customerData, address:e.target.value})} />
        </label>
        <label>
          City:
          <input type="text" name="city" value={customerData.city} onChange={(e)=> setCustomerData({...customerData, city:e.target.value})} />
        </label>
        <label>
          <input type="submit" value="Submit" />
        </label>
      </form>
    </div>
  );
}

export default Forms;
