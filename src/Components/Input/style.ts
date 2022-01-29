import styled from "styled-components";

export const InputStyled = styled.input`
  background-color: var(--grey-0);
  width: 85%;
  border: none;
  color: var(--grey-50);
  margin-bottom: 25px;
  height: 60px;
  border-radius: 5px;
  font-size: 15px;
  padding: 10px;
  :focus {
    border: 2px solid var(--grey-100);
    background-color: white;
    color: var(--grey-100);
  }
`;
