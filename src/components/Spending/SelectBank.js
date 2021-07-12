import { useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import "./Spending.css";

function SelectBank() {
  const [bank, setBank] = useState("Main Bank");
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
              {bank} ▼
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul className="MainBank-Records">
                <li>Bank 2</li>
                <li>Bank 3</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="card-header-mainbank">
            <Accordion.Toggle
              className="toggle-MainBank"
              as={Button}
              variant="link"
              eventKey="1"
            >
              Spending ▼
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ul className="MainBank-Records">
                <li>Records</li>
                <li>Loans</li>
                <li>Investments</li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default SelectBank;
