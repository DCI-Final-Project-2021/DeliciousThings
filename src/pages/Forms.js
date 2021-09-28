import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Forms() {
  let history = useHistory();

  const submitForm = () => {
    const url = `http://localhost:2005/orders`;
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: "deneme name",
        detail: "deneme detail",
        customerId: "deneme id customer",
        date: "deneme name",
        price: "beles",
        driver: "yok",
      }),
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
          <input type="text" name="name" />
        </label>
        <br/>
        <label>
          Surname:
          <input type="text" name="name" />
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    </div>

    // <Form className="container form" >
    //   <Row className="mb-3">
    //     <Form.Group as={Col} controlId="formGridName">
    //       <Form.Label>Name</Form.Label>
    //       <Form.Control type="text" placeholder="Enter name" />
    //     </Form.Group>

    //     <Form.Group as={Col} controlId="formGridSurname">
    //       <Form.Label>Surname</Form.Label>
    //       <Form.Control type="text" placeholder="Enter surname" />
    //     </Form.Group>
    //   </Row>
    //   <Row className="mb-3">
    //     <Form.Group as={Col} controlId="formGridEmail">
    //       <Form.Label>Email</Form.Label>
    //       <Form.Control type="email" placeholder="Enter email" />
    //     </Form.Group>

    //     <Form.Group as={Col} controlId="formGridPassword">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control type="password" placeholder="Password" />
    //     </Form.Group>
    //   </Row>

    //   <Form.Group className="mb-3" controlId="formGridAddress1">
    //     <Form.Label>Address</Form.Label>
    //     <Form.Control placeholder="1234 Main St" />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formGridAddress2">
    //     <Form.Label>Address 2</Form.Label>
    //     <Form.Control placeholder="Apartment, studio, or floor" />
    //   </Form.Group>

    //   <Form.Group className="mb-3" id="formGridCheckbox">
    //     <Form.Check type="checkbox" label="Check me out" />
    //   </Form.Group>

    //   <Button variant="secondary" type="submit">
    //     Submit
    //   </Button>

    // </Form>
  );
}

export default Forms;
