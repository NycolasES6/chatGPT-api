import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;

export const OutPut = styled.div`
  height: calc(100vh - 70px);
  width: 100%;
  background-color: var(--grey-800);
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 0 10px;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    background-color: var(--grey-700);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--grey-500);
    border-radius: 3px;
  }
  ::-webkit-scrollbar-button {
    background-color: #fff;
  }
`;

export const OutPutText = styled.p`
  font-size: 20px;
  font-weight: medium;
  color: var(--white);
`;

export const Form = styled.form`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputQuestion = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  margin-right: 3px;
  outline: none;
  font-size: 13pt;
`;

export const Button = styled.button`
  width: 80px;
  height: 100%;
  border-radius: 3px;
  transition: 0.3s;
  font-size: 13pt;
  font-weight: 500;
  :hover {
    cursor: pointer;
    background: var(--discover-mid);
    color: var(--white);
  }
`;
