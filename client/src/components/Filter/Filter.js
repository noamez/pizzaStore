import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

function Filter({ setpizzaOption, pizzaOption, pizzas, setfiltered }) {
  useEffect(() => {
    if (pizzaOption === 0) {
      setfiltered(pizzas);
      return;
    }
    const filtered = pizzas.filter((pizza) =>
      pizza.genre_ids.includes(pizzaOption)
    );
    setfiltered(filtered);
  }, [pizzaOption, pizzas, setfiltered]);

  return (
    <div>
      <Button className="filter-container" onClick={() => setpizzaOption(0)}>
        All
      </Button>
      {"  "}
      <Button className="filter-Buttom" onClick={() => setpizzaOption(1)}>
        Pizzas
      </Button>
      {"  "}
      <Button className="filter-Buttom" onClick={() => setpizzaOption(2)}>
        Drinks
      </Button>
    </div>
  );
}
export default Filter;
