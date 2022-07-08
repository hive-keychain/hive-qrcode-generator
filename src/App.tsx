import { Op } from "hive-qrcode";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/NavBar";
import QRDisplay from "./components/QRDisplay";
import QRForm from "./components/QRForm";

function App() {
  const [op, setOp] = useState<Op>();
  const onSubmitOp = (op: Op) => {
    setOp(op);
  };
  return (
    <div className="App">
      <NavBar />
      <Container style={{ marginTop: "5rem", width: "100%" }}>
        <Row>
          <Col className="centered">
            <QRForm onSubmitOp={onSubmitOp} />
          </Col>
          <Col className="centered">
            <QRDisplay op={op} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
