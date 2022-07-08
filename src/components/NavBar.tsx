import { Container, Navbar } from "react-bootstrap";

export default () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="img/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          style={{ marginRight: 20 }}
        />{" "}
        Hive QR Code Generator
      </Navbar.Brand>
    </Container>
  </Navbar>
);
