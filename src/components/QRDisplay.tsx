import HiveQRCode, { Op } from "hive-qrcode";
import { Card } from "react-bootstrap";

type Props = { op: Op };

export default ({ op }: Props) => {
  return (
    <Card style={{ width: "30rem" }}>
      <Card.Body>
        <Card.Title>Step 2</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Get your QR Code
        </Card.Subtitle>
        {op && <HiveQRCode op={op} withLogo />}
      </Card.Body>
    </Card>
  );
};
