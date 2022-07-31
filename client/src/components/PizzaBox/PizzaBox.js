import React from "react";
import { Button, Card, Col } from "react-bootstrap";

function PizzaBox(props) {
  const { pizza } = props;
  const { onAdd } = props;
  console.log(onAdd);

  return (
    <Col>
      <Card
        key={pizza.id}
        style={{
          width: "18rem",
          height: "29rem",
          display: "flex",
        }}
      >
        <Card.Img
          src={pizza.image}
          style={{
            width: "18rem",
            height: "18rem",
          }}
        />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <Card.Text>
            {pizza.description}
            {"\n"}
            {pizza.toppings}
            {"\n"}
          </Card.Text>
          Price:
          {pizza.price}${"\n"}
          <Button variant="primary" onClick={() => onAdd(pizza)}>
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default PizzaBox;
