import { Op } from "hive-qrcode";
import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

type Props = {
  onSubmitOp: (op: Op) => void;
};

export default ({ onSubmitOp }: Props) => {
  const [id, setId] = useState<number>();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitOp(['update_proposal_votes',
    {
      proposal_ids: [id],
      approve: true,
      extensions: [],
    },] );
  };

  return (
    <Form style={{ marginTop: 50 }} onSubmit={onSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Proposal Id"
          aria-label="Username"
          value={id}
          onChange={(e) => setId(+e.target.value)}
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
