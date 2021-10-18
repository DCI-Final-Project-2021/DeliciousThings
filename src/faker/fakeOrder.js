import faker from "faker";
import api from "../api/fetchDataFromDB.js";
import menu from "./menu.json";

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

const customerData = {
  name: faker.name.firstName(),
  surname: faker.name.lastName(),
  email: faker.internet.email(),
  tel: "12341234",
  address: faker.address.streetAddress(),
  city: faker.address.city(),
};

const order = {
  food: cartFunction(),
  userId: "",
  customerId: "",
  total: totalPrice(cart),
};

const submitForm = () => {
  console.log("submit forma geldi");
  api.createNewCustomer(customerData).then((result) => {
    console.log("res", result);
    const updatedOrder = {
      ...order,
      customerId: result._id,
      userId: result.user,
    };
    console.log("Olusturulan yeni kullanici:", updatedOrder);
    api.addOrderToCustomer(updatedOrder).then((result) => {
      console.log("Customer a siparis eklenmis mi:", result);
    });
  });
};

export default { submitForm };
