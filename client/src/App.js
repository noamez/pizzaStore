import React, { useState } from "react";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";
import Branches from "./components/Branches/Branches";
import JoinUs from "./components/JoinUs/JoinUs";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div>
      <Router>
        <Header cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
        <Switch>
          <Route exact path="/">
            {" "}
            <Menu onAdd={onAdd} />
          </Route>

          <Route path="/Menu">
            {" "}
            <Menu onAdd={onAdd} />
          </Route>
          <Route path="/AboutUs">
            {" "}
            <AboutUs />
          </Route>
          <Route path="/ContactUs">
            {" "}
            <ContactUs />
          </Route>
          <Route path="/Branches">
            {" "}
            <Branches />
          </Route>
          <Route path="/JoinUs">
            {" "}
            <JoinUs />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
