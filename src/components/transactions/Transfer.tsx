import { Op } from "hive-qrcode";
import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

type Props = {
  onSubmitOp: (op: Op) => void;
};

export default ({ onSubmitOp }: Props) => {
  const [username, setUsername] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("HIVE");
  const [memo, setMemo] = useState("");


  const [isRecurrent, setIsRecurrent] = useState(false);
  const [recurrence, setRecurrence] = useState("");
  const [executions, setExecutions] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!isRecurrent) 
    onSubmitOp([
      "transfer",
      { to: username, amount: `${amount} ${currency}`, memo },
    ]);
    else onSubmitOp([
      'recurrent_transfer',
      {
        to: username,
        amount: `${amount} ${currency}`,
        memo: memo,
        recurrence,
        executions,
        extensions: [],
      },
    ])
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
      <InputGroup className="mb-3">
      <Form.Control
        placeholder="Memo (optional)"
        aria-label="Memo"
        aria-describedby="memo"
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
      /></InputGroup>
      <InputGroup className="mb-3">
      <Form.Check
        type="checkbox"
        label="Recurrent" checked={isRecurrent}
        onChange={(e) => setIsRecurrent(e.target.checked)}
      /></InputGroup>
      {isRecurrent && (
        <><InputGroup className="mb-3">
          <Form.Control
          placeholder="Executions"
          aria-label="Executions"
          aria-describedby="Executions"
          value={executions}
          onChange={(e) => setExecutions(e.target.value)}
        />
        </InputGroup>  
        <Form.Control
        placeholder="Recurrence"
        aria-label="Recurrence"
        aria-describedby="Recurrence"
        value={recurrence}
        onChange={(e) => setRecurrence(e.target.value)}
      /></>
      )}

      <Button variant="primary" type="submit" style={{ marginTop: 100 }}>
        Generate
      </Button>
    </Form>
  );
};
