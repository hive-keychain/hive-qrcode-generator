import HiveQRCode, { Op } from "hive-qrcode";
import { encodeOp } from "hive-uri";
import { useState } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  InputGroup,
  Toast,
  ToastContainer
} from "react-bootstrap";

type Props = { op: Op };

export default ({ op }: Props) => {
  const [size, setSize] = useState(250);
  const [qrType, setQrType] = useState<"dots" | "squares">("dots");
  const [showHiveLogo, setShowHiveLogo] = useState(true);
  const [color, setColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [message, setMessage] = useState("");
  return (
    <Card style={{ width: "30rem", height: "40rem", marginBottom: "5rem" }}>
      <Card.Body>
        <Card.Title>Step 2</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Customize your QR Code
        </Card.Subtitle>
        <Card.Text>Try it out on your phone!</Card.Text>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Size</InputGroup.Text>
          <Form.Control
            placeholder="Size"
            aria-label="Size"
            aria-describedby="basic-addon1"
            type="number"
            max={250}
            value={size + ""}
            onChange={(e) => setSize(Math.min(+e.target.value, 250))}
            required
          />
          <InputGroup.Text id="basic-addon1">Style</InputGroup.Text>
          <Form.Select
            value={qrType}
            onChange={(e) => {
              setQrType(e.target.value as "dots" | "squares");
            }}
          >
            <option>Dots</option>
            <option>Squares</option>
          </Form.Select>
          <InputGroup.Checkbox
            aria-label="Hive logo"
            checked={showHiveLogo}
            onChange={() => {
              setShowHiveLogo(!showHiveLogo);
            }}
          />
          <InputGroup.Text>Show logo</InputGroup.Text>
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Color</InputGroup.Text>
          <Form.Control
            placeholder="Size"
            aria-label="Size"
            aria-describedby="basic-addon1"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />
          <InputGroup.Text id="basic-addon1">Background</InputGroup.Text>
          <Form.Control
            placeholder="Size"
            aria-label="Size"
            aria-describedby="basic-addon1"
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            required
          />
        </InputGroup>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
            height: op ? "auto" : "55%",
          }}
        >
          {op ? (
            <HiveQRCode
              id="qr-code"
              op={op}
              withLogo={showHiveLogo}
              qrStyle={qrType.toLowerCase() as "dots" | "squares"}
              size={size}
              fgColor={color}
              bgColor={backgroundColor}
            />
          ) : (
            <img src="img/logohive.png" width={size} />
          )}
        </Container>
        {op && (
          <Container style={{ flexDirection: "column" }}>
            <Container
              style={{
                width: "80%",
                justifyContent: "space-around",
                display: "flex",
                marginBottom: 20,
              }}
            >
              <Button
                onClick={() => {
                  const canvas = document.getElementById(
                    "qr-code"
                  ) as HTMLCanvasElement;
                  canvas.toBlob(
                    function (blob) {
                      const item = new ClipboardItem({ "image/png": blob });
                      navigator.clipboard.write([item]);
                    },
                    "image/png",
                    1
                  );
                  setMessage("The image has been copied to your clipboard!");
                }}
                variant="primary"
                type="button"
              >
                Copy
              </Button>
              <Button
                onClick={() => {
                  const canvas = document.getElementById(
                    "qr-code"
                  ) as HTMLCanvasElement;
                  canvas.toBlob((blob) => {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = "qr-code.png";
                    a.click();
                    setMessage("Downloading...");

                  }, "image/png");
                }}
              >
                Download
              </Button>
            </Container>
            <InputGroup className="mb-3">
              <InputGroup.Text>URL</InputGroup.Text>
              <Form.Control value={encodeOp(op)} disabled />
              <Button
                variant="secondary"
                onClick={() => {
                  navigator.clipboard.writeText(encodeOp(op));
                  setMessage("The url has been copied to your clipboard!");
                }}
              >
                Copy
              </Button>
            </InputGroup>
          </Container>
        )}
      </Card.Body>
      <ToastContainer
        position="bottom-end"
        containerPosition="fixed"
        style={{ margin: 30 }}
      >
        <Toast
          autohide
          show={message.length !== 0}
          onClose={() => {
            setMessage("");
          }}
        >
          <Toast.Header>
            <img
              src="img/logohive.png"
              className="rounded me-2"
              style={{ width: 20 }}
            />
            <strong className="me-auto">Message</strong>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </Card>
  );
};
