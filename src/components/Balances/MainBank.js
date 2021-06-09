import React, { useState } from "react";
import "./Balances.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Card, Button } from "react-bootstrap";

export default function MainBank() {
  return (
    <div>
      <Accordion>
        <Card>
          <Card.Header className="card-header-mainbank">
            <Accordion.Toggle
              className="toggle-MainBank"
              as={Button}
              variant="link"
              eventKey="0"
            >
              Main Bank ▼
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul className="MainBank-Records">
                <li>Record example number 1</li>
                <li>Record example number 2</li>
                <li>Record example number 3</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="card-header-secondbank">
            <Accordion.Toggle
              className="toggle-SecondBank"
              as={Button}
              variant="link"
              eventKey="0"
            >
              Second Bank ▼
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Records</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="card-second-mainbank">
            <Accordion.Toggle
              className="toggle-SecondBank"
              as={Button}
              variant="link"
              eventKey="0"
            >
              Third Bank ▼
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Records</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
