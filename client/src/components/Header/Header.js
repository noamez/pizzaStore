import React, { useState } from "react";
import { Offcanvas, Nav } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

function Header() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <Nav
      defaultActiveKey="/home"
      as="ul"
      className="Home"
      style={{
        background: "red",
        height: "50px",
        display: "flex",
        fontweight: "200",
      }}
    >
      <img
        alt=""
        src="https://img.freepik.com/premium-vector/pizza-logo-design_9845-319.jpg?w=2000"
        width="80"
        height="50"
        className="d-inline-block align-top"
      />{" "}
      <Nav.Item as="li">
        <Nav.Link
          href="/Menu"
          style={{
            color: "white",
            height: "50px",
            display: "flex",
            fontSize: "25px",
          }}
        >
          Menu
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link
          href="/About-us"
          style={{
            color: "white",
            height: "50px",
            display: "flex",
            fontSize: "25px",
          }}
        >
          About Us
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link
          href="/contact-us"
          style={{
            color: "white",
            height: "50px",
            display: "flex",
            fontSize: "25px",
          }}
        >
          Contact Us
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link
          href="/Branches"
          style={{
            color: "white",
            height: "50px",
            display: "flex",
            fontSize: "25px",
          }}
        >
          Branches
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link
          href="/Were hiring"
          style={{
            color: "white",
            height: "50px",
            display: "flex",
            fontSize: "25px",
          }}
        >
          Join Us!
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li" onClick={() => setCartOpen(true)}>
        <img
          alt=""
          src="https://www.kindpng.com/picc/m/404-4040116_transparent-cart-png-shopping-cart-svg-icon-png.png"
          width="99"
          height="50"
          className="d-inline-block align-top"
        />
      </Nav.Item>
      <Offcanvas show={cartOpen} onHide={() => setCartOpen(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart - your order is here!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body></Offcanvas.Body>
      </Offcanvas>
      <Nav.Item as="li">
        <Nav.Link
          href="/Were hiring"
          style={{
            color: "white",
            height: "50px",
            display: "flex",
            fontSize: "25px",
          }}
        >
          Delivery hours: 10:00-22:00
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Header;
