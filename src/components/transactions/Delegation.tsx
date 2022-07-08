import { Op } from "hive-qrcode";
import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

type Props = {
  onSubmitOp: (op: Op) => void;
};

export default ({ onSubmitOp }: Props) => {
  const [username, setUsername] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitOp([
      "delegate_vesting_shares",
      { delegatee: username, hp: `${amount} HP` },
    ]);
  };

  return (
    <Form style={{ marginTop: 50 }} onSubmit={onSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Recipient Username"
          aria-label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Amount"
          aria-label="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          aria-describedby="basic-addon1"
        />
        <InputGroup.Text id="basic-addon1">HP</InputGroup.Text>
      </InputGroup>
      <Button variant="primary" type="submit" style={{ marginTop: 100 }}>
        Generate
      </Button>
    </Form>
  );
};
