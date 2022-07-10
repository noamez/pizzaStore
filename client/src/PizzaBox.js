import React, { useEffect } from "react";
import {Button, Card, Container, Row} from "react-bootstrap";
import Header from "./Header";

function PizzaBox(pizza) {
    const currentPizza = pizza.pizza;

    return <Card key={currentPizza.name} style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>{currentPizza.name}</Card.Title>
            <Card.Text>
                {currentPizza.description}
            </Card.Text>
            <Button variant="primary">Add to cart</Button>
        </Card.Body>
    </Card>
}

export default PizzaBox;
