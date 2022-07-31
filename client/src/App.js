import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Header from "./components/Header/Header";
import PizzaBox from "./components/PizzaBox/PizzaBox";

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("/pizzas")
      .then((res) => res.json())
      .then((pizzasResponse) => setPizzas(pizzasResponse));
  }, []);

  return (
    <div>
      <Header />

      <Container className="mt-1">
        <center>
          <img
            alt=""
            src="images/menu.jpg"
            width="130"
            height="130"
            className="d-inline-block align-top"
            justifycontent="center"
          />
        </center>
        <Row xs={2} md={3} lg={4}>
          {pizzas.map((pizza) => {
            return <PizzaBox pizza={pizza} />;
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
