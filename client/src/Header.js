import React from "react";
import {Col, Container, Nav, Row} from "react-bootstrap";

function Header() {

  return <Nav defaultActiveKey="/home" as="ul" style={{background: "red"}}>
    <Nav.Item as="li">
      <Nav.Link href="/home">
        LOGO
      </Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link href="/about-us">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link href="/contact-us">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item as="li">
      <Nav.Link href="/cart">Cart</Nav.Link>
    </Nav.Item>
  </Nav>;
}

export default Header;
