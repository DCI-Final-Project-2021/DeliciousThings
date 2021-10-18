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
      const url = `http://localhost:2005/customers`;
      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({...customer}),
      };
      console.log("create new customer");
      return await fetch(url, options)
        .then((response) => response.json())
        .then((jsonData) => jsonData.result);
    } catch (error) {
      console.log(error);
    }
  },
  addOrderToCustomer: async function (order) {
    try {
      const url = `http://localhost:2005/orders`;
      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(order),
      };
      console.log("create new customer");
      return await fetch(url, options)
        .then((response) => response.json())
        .then((jsonData) => jsonData.result);
    } catch (error) {
      console.log(error);
    }
  },
};
