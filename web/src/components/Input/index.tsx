import React, { useState } from "react";
import axios from "axios";

import {OutPutText, OutPut, Form, Container, InputQuestion, Button } from "./styles";

const Input: React.FC = () => {
  const [value, setValue] = useState(String);
  const [outText, setOutText] = useState(String);

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setValue("");
    const question = await axios.post("http://localhost:3003/api", {
      question: value,
    });
    
    setOutText(question.data.response)
  }

  return (
    <Container>
      <OutPut>
      <OutPutText>
        {
          outText
        }
      </OutPutText>
      </OutPut>
      <Form onSubmit={handleSubmit}>
        <InputQuestion
          value={value}
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
};

export default Input;
