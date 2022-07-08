import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export default () => {
  const [username, setUsername] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("HIVE");
  const [memo, setMemo] = useState("");

  const onSubmit = () => {
    console.log({ username, amount, currency, memo });
  };

  return (
    <Form style={{ marginTop: 50 }} onSubmit={onSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Recipient Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Amount"
          type="number"
          aria-label="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          aria-describedby="amount"
        />
        <Form.Select
          value={currency}
          onChange={(e) => {
            setCurrency(e.target.value);
          }}
        >
          <option>HIVE</option>
          <option>HBD</option>
        </Form.Select>
      </InputGroup>
      <Form.Control
        placeholder="Memo (optional)"
        aria-label="Memo"
        aria-describedby="memo"
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
      />

      <Button variant="primary" type="submit" style={{ marginTop: 100 }}>
        Generate
      </Button>
    </Form>
  );
};
