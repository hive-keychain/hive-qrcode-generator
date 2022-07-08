import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/NavBar";
import QRDisplay from "./components/QRDisplay";
import QRForm from "./components/QRForm";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container style={{ marginTop: "5rem", width: "100%" }}>
        <Row>
          <Col className="centered">
            <QRForm />
          </Col>
          <Col className="centered">
            <QRDisplay />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
