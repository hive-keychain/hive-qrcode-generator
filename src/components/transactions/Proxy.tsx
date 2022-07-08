import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export default () => {
    const [username, setUsername] = useState("");

  const onSubmit = () => {
    console.log({ username });
  };

  return (
    <Form style={{ marginTop: 50 }} onSubmit={onSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Proxy Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </InputGroup>

      <Button variant="primary" type="submit" style={{ marginTop: 100 }}>
        Generate
      </Button>
    </Form>
  );
};
