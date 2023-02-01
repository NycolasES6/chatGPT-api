import React, { useState } from 'react';
import axios from 'axios';

import { Container, InputQuestion, Button } from './styles';

const Input: React.FC = () => {
  const [value, setValue] = useState(String)

  async function handleSubmit(e: { preventDefault: () => void; }){
    e.preventDefault();
    const question = await axios.post("http://localhost:3003/api",{
      question: value
    })

    console.log(question.data.response)
  }

  return <Container onSubmit={handleSubmit}>
    <InputQuestion value={value} type="text" onChange={(e)=>setValue(e.target.value)} />
    <Button type='submit'>Enviar</Button>
  </Container>;
}

export default Input;