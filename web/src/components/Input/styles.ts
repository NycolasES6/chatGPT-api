import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  height: 50px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputQuestion = styled.input`
  width:100%;
  height: 100%;
  border-radius: 3px;
  margin-right:3px;
`;

export const Button = styled.button`
  width: 80px;
  height: 100%;
  border-radius: 3px;
  :hover{
    cursor: pointer;
  }
`;
