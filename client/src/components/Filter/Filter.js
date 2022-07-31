import React, { useEffect } from "react";

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
  }, [pizzaOption]);

  return (
    <div className="filter-container">
      <button
        style={{
          width: "35px",
          height: "35px",
          background: "white",
          color: "blue",
          borderColor: "blue",
        }}
        onClick={() => setpizzaOption(0)}
      >
        All
      </button>
      {"  "}
      <button
        style={{
          width: "60px",
          height: "35px",
          background: "white",
          color: "blue",
          borderColor: "blue",
        }}
        onClick={() => setpizzaOption(1)}
      >
        Pizzas
      </button>
      {"  "}
      <button
        style={{
          width: "60px",
          height: "35px",
          background: "white",
          color: "blue",
          borderColor: "blue",
        }}
        onClick={() => setpizzaOption(9)}
      >
        Drinks
      </button>
    </div>
  );
}
export default Filter;
