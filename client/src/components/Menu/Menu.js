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
    fetch("/pizzas")
      .then((res) => res.json())
      .then((pizzasResponse) => {
        setPizzas(pizzasResponse);
        setfiltered(pizzasResponse);
      });
  }, [pizzas]);

  return (
    <Container>
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
      <Row xs={2} md={3} lg={4}>
        {pizzas.map((pizza) => {
          return <PizzaBox pizza={pizza} onAdd={onAdd} />;
        })}
      </Row>
    </Container>
  );
}
export default Menu;
