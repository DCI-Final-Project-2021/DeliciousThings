// import dotenv from "dotenv";
// dotenv.config();
// import { io } from "socket.io-client";

export default {
  fetchDataFromDataBase: async function (url) {
    try {
      return await fetch(url)
        .then((response) => response.json())
        .then((jsonData) => jsonData.result);
    } catch (error) {
      console.log(error);
    }
  },
  createNewCustomer: async function (customer) {
    try {
      // const url = `${process.env.REACT_APP_API_SERVER}/customers`;
      const url = `http://localhost:2005/customers`;
      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({...customer}),
      };
      return await fetch(url, options)
        .then((response) => response.json())
        .then((jsonData) => jsonData.result);
    } catch (error) {
      console.log(error);
    }
  },
  addOrderToCustomer: async function (order) {
    console.log("add Order Function", order);
    try {
      // const url = `${process.env.REACT_APP_API_SERVER}/orders`;
      const url = `http://localhost:2005/orders`;
      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(order),
      };
      return await fetch(url, options)
        .then((response) => response.json())
        .then((jsonData) => jsonData.result);
    } catch (error) {
      console.log(error);
    }
  },
  getOrderById: async function (id) {
    try {
      // const url = `${process.env.REACT_APP_API_SERVER}/orders/${id}`;
      const url = `http://localhost:2005/orders/${id}`;
      const options = {
        headers: {
          "Content-type": "application/json",
        },
      };
      return await fetch(url, options)
        .then((response) => response.json())
        .then((jsonData) => {
          return jsonData.result
        });
    } catch (error) {
      console.log(error);
    }
  },
};
