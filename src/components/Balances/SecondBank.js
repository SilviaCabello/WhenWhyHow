import React, { useState } from "react";
import "./Balances.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Card, Button } from "react-bootstrap";

export default function SecondBank() {
  return (
      <div>
          <Accordion>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0" >
        Second Bank
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Records</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
      </div>
  )
}


