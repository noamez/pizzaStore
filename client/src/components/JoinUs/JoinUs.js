import React from "react";
import { Card } from "react-bootstrap";

function JoinUs() {
  return (
    <Card
      className="text-center"
      style={{
        width: "80rem",
        height: "40rem",
        display: "flex",
      }}
    >
      <Card.Header>Join Us! - Noam's pizza</Card.Header>
      <Card.Title>Love Pizza? join now to Noam's Pizza!</Card.Title>
      <Card.Body
        style={{
          color: "red",
          height: "28px",
        }}
      >
        As a global leader in the restaurant industry, our Pizza makes hungry
        customers happy while cultivating a fun, safe and <br></br>
        supportive culture among team members. When you join the team, we invest
        our resources in your personal success
        <br></br> and with a wide range of opportunities for growth and
        locations all over the country, the possibilities are only as limited as
        your drive. <br></br>
        Here you can become your best, make friends, and have fun. Take your
        next step and live Life Unboxed!<br></br>
        <small
          style={{
            color: "black",
            height: "28px",
            fontSize: "1.5rem",
          }}
        >
          We looking for : <br></br>
          Restaurant Manager
        </small>
        <br></br> description : Responsible for managing the restaurant and
        assigning tasks to employees <br></br>
        Our management team members help direct the day-to-day operations of an
        entire restaurant
        <br></br>and use their knowledge to assemble a great team and create a
        one-of-a-kind customer experience.
        <br></br> Location : Tel Aviv Bograshov 51 <br></br>
        Email to send your cv resume : PizzaNoam1997@gmail.com.
        <small
          style={{
            color: "black",
            height: "28px",
            fontSize: "1.5rem",
          }}
        >
          <br></br>
          Delivery Driver
        </small>
        <br></br>
        description : Our energetic drivers know how to make hungry people happy
        and can make some great tips while they're at it.
        <br></br>
        Location : Beer Sheva Gilat Center
        <br></br>
        Email to send your cv resume : PizzaNoam1997@gmail.com.
        <br></br>
        <small
          style={{
            color: "black",
            height: "28px",
            fontSize: "1.5rem",
          }}
        >
          Team Member
        </small>
        <br></br>
        description : Our friendly Team Members can be the first point of
        contact whether a customer walks through the door or calls on the phone.
        <br></br>
        Location : Dimona Damari Center
        <br></br>
        Email to send your cv resume : PizzaNoam1997@gmail.com.
      </Card.Body>
    </Card>
  );
}
export default JoinUs;
