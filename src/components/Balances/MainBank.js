import React, { useState } from "react";
import "./Balances.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Card, Button } from "react-bootstrap";

export default function MainBank() {
  return (
    <div className="accordionContainer">
      <Accordion className="Acordion-Balances">
        <Card className="card-balances">
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
                <li>
                  Pie Me Restaurant Bonn &nbsp; &nbsp; 32,98€ <br></br>09.05.21
                </li>
                <br></br>
                <li>
                  Rewe Supermarkt Bonn &nbsp; &nbsp; 47,99€ <br></br>09.05.21
                </li>
                <br></br>
                <li>
                  Ernst Kaffeeröster Köln &nbsp; &nbsp; 18,96€ <br></br>09.05.21
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="card-balances">
          <Card.Header className="card-header-secondbank">
            <Accordion.Toggle
              className="toggle-SecondBank"
              as={Button}
              variant="link"
              eventKey="1"
            >
              Second Bank ▼
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Records</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="card-balances1">
          <Card.Header className="card-header-secondbank">
            <Accordion.Toggle
              className="toggle-SecondBank"
              as={Button}
              variant="link"
              eventKey="2"
            >
              Third Bank ▼
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Records</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
