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
      <div style={{ flex: 1 }}>
        <Container
          style={{
            marginTop: 50,
          }}
        >
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
      <div className="footer-text">Hive Keychain, 2022</div>
    </div>
  );
}

export default App;
