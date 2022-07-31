import React, { useEffect } from "react";
import { Button, Card, Col } from "react-bootstrap";

function PizzaBox(pizza) {
  const currentPizza = pizza.pizza;

  return (
    <Col>
      <Card
        key={currentPizza.name}
        style={{
          width: "18rem",
          height: "29rem",
          display: "flex",
        }}
      >
        <Card.Img
          src={currentPizza.image}
          style={{
            width: "18rem",
            height: "18rem",
          }}
        />
        <Card.Body>
          <Card.Title>{currentPizza.name}</Card.Title>
          <Card.Text>
            {currentPizza.description}
            {"\n"}
            {currentPizza.toppings}
            {"\n"}
          </Card.Text>
          Price:
          {currentPizza.price}
          {"\n"}
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default PizzaBox;
