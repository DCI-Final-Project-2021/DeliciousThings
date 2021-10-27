import faker from "faker";
import api from "../api/fetchDataFromDB.js";
import menu from "./menu.json";
// import { io } from "socket.io-client";

const cart = [];

const cartFunction = () => {
  const cartLength = Math.floor(Math.random() * 4) + 1;

  for (let i = 0; i < cartLength; i++) {
    const randomIndex = Math.floor(Math.random() * 9);
    let objAd = menu[randomIndex];
    let objIndex = cart.findIndex((obj) => obj.name === objAd.name);
    if (objIndex === -1) {
      objAd = { ...objAd, count: 1 };
      cart.push(objAd);
    } else {
      cart[objIndex].count += 1;
    }
  }
  return cart;
};

const totalPrice = (carts) => {
  let total = 0;
  carts.map((item, i) => {
    total += item.count * (item.price.slice(0, -1) * 1);
    return total;
  });
  return total;
};

const submitForm = () => {
  let customerData = {};
  customerData = {
    name: faker.name.firstName(),
    surname: faker.name.lastName(),
    email: faker.internet.email(),
    tel: faker.phone.phoneNumber(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
  };
  
  const order = {
    food: cartFunction(),
    userId: "",
    customerId: "",
    total: totalPrice(cart),
  };
  console.log("submit form", order);
  
  api.createNewCustomer(customerData).then((result) => {
    const updatedOrder = {
      ...order,
      customerId: result._id,
      userId: result.user,
    };
    api.addOrderToCustomer(updatedOrder).then((result) => {
      // api.getOrderById(result._id).then((order) => {
        // let socket = io("https://order-driver-tracking.herokuapp.com");
        // let socket = io("http://localhost:2006");
        // socket.emit("cart", order);
      // });

      return result;
    });
  });
};

export default { submitForm };
