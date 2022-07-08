import { Op } from "hive-qrcode";
import { useState } from "react";
import { Card, Container, Tab, Tabs } from "react-bootstrap";
import Delegation from "./transactions/Delegation";
import Proxy from "./transactions/Proxy";
import Transfer from "./transactions/Transfer";
import Witness from "./transactions/Witness";

type Props = {
  onSubmitOp: (op: Op) => void;
};

export default ({ onSubmitOp }: Props) => {
  const [key, setKey] = useState("transfer");

  return (
    <Card style={{ width: "40rem", height: "40rem" }}>
      <Card.Body>
        <Card.Title>Step 1</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Define your transaction
        </Card.Subtitle>
        <Card.Text>
          Select the transaction that will be shown as a Hive QR Code
          <Container style={{ marginTop: 30 }}>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="transfer" title="Transfer">
                <Transfer onSubmitOp={onSubmitOp} />
              </Tab>
              <Tab eventKey="delegation" title="Delegation">
                <Delegation onSubmitOp={onSubmitOp} />
              </Tab>

              <Tab eventKey="witness" title="Witness">
                <Witness onSubmitOp={onSubmitOp} />
              </Tab>
              <Tab eventKey="proxy" title="Proxy">
                <Proxy onSubmitOp={onSubmitOp} />
              </Tab>
            </Tabs>
          </Container>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
