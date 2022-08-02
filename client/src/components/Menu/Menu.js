import React, { useEffect, useState } from "react";
import PizzaBox from "../PizzaBox/PizzaBox";
import { Container, Row } from "react-bootstrap";
import Filter from "../Filter/Filter";

function Menu(props) {
  const [pizzas, setPizzas] = useState([]);
  const { onAdd } = props;
  const [filtered, setfiltered] = useState([]);
  const [pizzaOption, setpizzaOption] = useState(0);

  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((pizzasResponse) => {
        setPizzas(pizzasResponse);
      });
  }, [pizzas]);

  return (
    <Container fluid>
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
      <Filter
        pizzas={pizzas}
        setfiltered={setfiltered}
        pizzaOption={pizzaOption}
        setpizzaOption={setpizzaOption}
      />
      <Row xs={1} md={3} lg={4}>
        {filtered.map((pizza) => {
          return <PizzaBox pizza={pizza} onAdd={onAdd} />;
        })}
      </Row>
    </Container>
  );
}
export default Menu;
