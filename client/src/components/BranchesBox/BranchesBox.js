import React from "react";
import { Card, Col } from "react-bootstrap";

function BranchesBox(Branch) {
  const currentBranch = Branch.b;
  console.log(Branch);
  return (
    <Col>
      <Card
        key={currentBranch.name}
        style={{
          width: "18rem",
          height: "29rem",
          display: "flex",
        }}
      >
        <Card.Img
          src={currentBranch.image}
          style={{
            width: "18rem",
            height: "18rem",
          }}
        />
        <Card.Title>{currentBranch.name}</Card.Title>
        <Card.Body>
          <Card.Text>
            Address:
            {currentBranch.Address}
            {"\n"}
          </Card.Text>
          Operation days:
          {currentBranch.days}
          {"\n"}
          Operation Hours:
          {currentBranch.hours}
          {"\n"}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default BranchesBox;
