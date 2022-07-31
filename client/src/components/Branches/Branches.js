import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import BranchesBox from "../BranchesBox/BranchesBox";

function Branches() {
  const [branch, setbranch] = useState([]);

  useEffect(() => {
    fetch("/Branches")
      .then((res) => res.json())
      .then((branchResponse) => {
        setbranch(branchResponse);
        console.log(branch);
      });
  }, [branch]);
  return (
    <Container>
      <Row xs={2} md={3} lg={4}>
        {branch.map((b) => {
          return <BranchesBox b={b} />;
        })}
      </Row>
    </Container>
  );
}

export default Branches;
