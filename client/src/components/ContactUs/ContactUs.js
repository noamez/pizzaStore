import React from "react";
import { Card, Figure } from "react-bootstrap";

function ContactUs() {
  return (
    <Card
      className="text-center"
      style={{
        width: "80rem",
        height: "40rem",
        display: "flex",
      }}
    >
      <Card.Header>Contact Us - Noam's pizza</Card.Header>
      <Card.Title>
        Phones For Calling :<br></br> Tel Aviv Branch: +972 054-5747271 |
        03-7771112 <br></br>
        Ramat Gan Branch : +972 052-5384648 | 03-6559711<br></br>
        Petah Tikva Branch: +972 052-7776611 | 03-6665550<br></br>
        Sderot Branch : +972 050-9788791 | 08-6553322<br></br>
        Beer Sheva Branch: +972 050-7684443 | 08-6559988 <br></br>
        Dimona Branch: +972 052-7567888 | 08-6559752<br></br>
      </Card.Title>
      <Figure>
        <Figure.Image className="contact-image" src="images/phoneCall.jpg" />
      </Figure>
    </Card>
  );
}
export default ContactUs;
