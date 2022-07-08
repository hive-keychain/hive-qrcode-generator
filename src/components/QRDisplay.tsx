import { Card } from "react-bootstrap";

export default () => {
  return (
    <Card style={{ width: "30rem" }}>
      <Card.Body>
        <Card.Title>Step 2</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Get your QR Code
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};
