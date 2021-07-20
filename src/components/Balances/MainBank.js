import "./Balances.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Card, Button } from "react-bootstrap";
import Table from "./Table";

export default function MainBank({ userData }) {
  console.log(userData);
  return (
    <div className="accordionContainer">
      <Accordion className="Acordion-Balances">
        <Card className="card-balances">
          <Card.Header className="card-header-mainbank-balances">
            <Accordion.Toggle
              className="toggle-MainBank-balances"
              as={Button}
              variant="link"
              eventKey="0"
            >
              Main Bank ▼
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Table userData={userData} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="card-balances">
          <Card.Header className="card-header-secondbank-balances">
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
            <Card.Body>
              <Table />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="card-balances">
          <Card.Header className="card-header-secondbank-balances">
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
            <Card.Body>
              <Table />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
