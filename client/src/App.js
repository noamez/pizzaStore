import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import Header from "./Header";
import PizzaBox from "./PizzaBox";

function App() {

    const [pizzas, setPizzas] = useState([]);

      useEffect(() => {
        fetch("/pizzas")
          .then((res) => res.json())
          .then((pizzasResponse) => setPizzas(pizzasResponse));
      }, []);

    return <div>
        <Header/>
        <Container>
            {pizzas.map((pizza) => {
                return <PizzaBox pizza={pizza}/>
            })}
        </Container>
    </div>;
}

export default App;
