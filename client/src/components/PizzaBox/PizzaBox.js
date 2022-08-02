import React from "react";
import { Button, Card, Col } from "react-bootstrap";

function PizzaBox(props) {
  const { pizza } = props;
  const { onAdd } = props;

  return (
    <Col>
      <Card className="mt-3 pizza-card" key={pizza.id}>
        <Card.Img className="card-image" src={pizza.image} />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <Card.Text>
            {pizza.description}
            <br></br>
            {pizza.toppings}
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
