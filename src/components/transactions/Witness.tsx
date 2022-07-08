import { Op } from "hive-qrcode";
import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

type Props = {
  onSubmitOp: (op: Op) => void;
};

export default ({ onSubmitOp }: Props) => {
  const [username, setUsername] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitOp(["account_witness_vote", { witness: username, approve: true }]);
  };

  return (
    <Form style={{ marginTop: 50 }} onSubmit={onSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Witness Username"
          aria-label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <Button variant="primary" type="submit" style={{ marginTop: 100 }}>
        Generate
      </Button>
    </Form>
  );
};
