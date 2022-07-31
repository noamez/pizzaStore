import React, { useState } from "react";
import { Offcanvas, Nav, Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.1;
  const shippingPrice = itemsPrice > 600 ? 0 : 15;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  const countCartItems = cartItems.length;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Nav
      defaultActiveKey="/Menu"
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
        src="https://img.freepik.com/premium-vector/pizza-logo-design_9845-319.jpg?w=2000"
        width="80"
        height="50"
        className="d-inline-block align-top"
      />{" "}
      <Nav.Item as="li">
        <Nav.Link
          as={Link}
          to={"/Menu"}
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
          as={Link}
          to={"/AboutUs"}
          style={{
            color: "white",
            height: "50px",
            display: "flex",
            fontSize: "25px",
          }}
        >
          {" "}
          About Us
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link
          as={Link}
          to={"/ContactUs"}
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
          as={Link}
          to={"/Branches"}
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
          as={Link}
          to={"/JoinUs"}
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
      <Nav.Link
        onClick={() => setCartOpen(true)}
        style={{
          color: "white",
          height: "50px",
          display: "flex",
          fontSize: "25px",
        }}
      >
        <FaShoppingCart style={{ marginTop: "5px" }} />
        {countCartItems ? (
          <button
            className="badge"
            style={{
              color: "blue",
              height: "30px",
              display: "flex",
              width: "30px",
            }}
          >
            {countCartItems}{" "}
          </button>
        ) : (
          ""
        )}
      </Nav.Link>
      <Offcanvas show={cartOpen} onHide={() => setCartOpen(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart - your order is here!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.length === 0 && <div>Cart is Empty</div>}
          {cartItems.map((item) => (
            <div key={item.id} className="row">
              <div className="col-2">{item.name}</div>
              <div className="col-2">
                <button onClick={() => onAdd(item)} className="add">
                  +
                </button>
                <button onClick={() => onRemove(item)} className="remove">
                  -
                </button>
              </div>
              <div className="col-2 text-right">
                {item.qty} x ${item.price.toFixed(2)}
              </div>
            </div>
          ))}
          {cartItems.length !== 0 && (
            <>
              <hr></hr>
              <div className="row">
                <div className="col-2">Item Price</div>
                <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">Tax Price</div>
                <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">Shipping Price</div>
                <div className="col-1 text-right">
                  ${shippingPrice.toFixed(2)}
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <strong>Total Price</strong>
                </div>
                <div className="col-1 text-right">
                  <strong>${totalPrice.toFixed(2)}</strong>
                </div>
              </div>
              <hr />
              <div className="row">
                <Button onClick={handleShow}>Checkout</Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Check Out</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Address for Delivery</Form.Label>
                        <Form.Control
                          type="Address"
                          placeholder="Example: Bograsov 51 Tel Aviv"
                          autoFocus
                        />
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="name@example.com"
                          autoFocus
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Credit Card Number</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={1}
                          type="credit card"
                          placeholder="1111-1111-1111-1111"
                          autoFocus
                        />
                        <Form.Label>Expiry Date</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={1}
                          type="credit card"
                          placeholder="Month/year"
                          autoFocus
                        />
                        <Form.Label>Name On Card</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={1}
                          type="credit card"
                          placeholder="Example: Noam Ezra"
                          autoFocus
                        />
                        <Form.Label>CVV</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={1}
                          type="credit card"
                          placeholder="3 digits on the back of card"
                          autoFocus
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
      <Nav.Item as="li">
        <Nav.Link
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
