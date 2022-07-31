import React from "react";
import { Card, Figure } from "react-bootstrap";

function AboutUs() {
  return (
    <Card
      className="text-center"
      style={{
        width: "80rem",
        height: "40rem",
        display: "flex",
      }}
    >
      <Card.Header>About Us - Noam's pizza</Card.Header>
      <Card.Title>
        Love Pizza? Enjoy Pizza Delivery With Noam's Pizza!
      </Card.Title>
      <Card.Body
        style={{
          color: "red",
          height: "28px",
        }}
      >
        Pizza is the world’s favourite food! Whether meaty, or vegetarian find
        your favorite in our special different pizzas. <br></br>
        At Noam's PIZZA, we offer endless flavours with local flair! <br></br>
        Pair your favourite slice and delicious toppings with melting premium
        cheese for the perfect pizza! <br></br>
        For convenience, order delivery or takeaway from your nearest outlet!
        <br></br> Don’t forget our promotions that can feed a single person up
        to big families!<br></br>
        Our style of pizza is not too thick or thin, it gives you just the right
        bite,<br></br>
        Moderately covered in sauce and cheese and topped with your toppings of
        choice, every bite is a sure delight.<br></br>
        That’s why we’re the pizza professionals! Ready to dig in? <br></br>
        Visit our website now to place your pizza order online or find out where
        to try the best pizza nearest to you.
        <br></br>
      </Card.Body>

      <Figure>
        <Figure.Image
          src="images/place.jpg"
          style={{
            width: "50rem",
            height: "19rem",
          }}
        ></Figure.Image>
      </Figure>
    </Card>
  );
}
export default AboutUs;
