import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;
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
export const LoginContainer = styled.form`
  display: flex;
  width: 500px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 8px;
  border: 1px solid var(--grey-20);
  animation-name: fade;
  animation-duration: 500ms;
  span {
    color: var(--red);
    font-size: 15px;
    margin-top: -15px;
    padding-bottom: 5px;
  }
  h1 {
    width: 85%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  button {
    width: 85%;
    height: 60px;
    color: white;
    border-radius: 5px;
    background-color: var(--green);
    margin-bottom: 20px;
    :hover {
      background-color: #93d7af;
    }
  }
  .register {
    background-color: var(--grey-0);
    margin-bottom: 20px;
    color: var(--grey-50);
    margin-top: 20px;
    :hover {
      background-color: var(--grey-50);
      color: var(--grey-0);
    }
  }
  p {
    color: var(--grey-50);
    width: 80%;
    text-align: center;
  }
  @media (max-width: 1000px) {
    width: 90%;
    max-width: 500px;
    min-width: 320px;
    h1 {
      font-size: 20px;
    }
    input {
      height: 40px;
    }
    button {
      width: 85%;
      height: 50px;
      color: white;
      border-radius: 5px;
      background-color: var(--green);
      margin-bottom: 20px;
      :hover {
        background-color: #93d7af;
      }
    }
  }
`;

export const TextContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin-left: 53px;
  margin-bottom: 140px;
  animation-name: fade;
  animation-duration: 1s;
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .letter {
    animation-name: fade;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  .titulo {
    display: flex;
    align-items: center;
    h1 {
      font-size: 35px;
      animation-name: fade;
      animation-duration: 1s;
    }
    span {
      margin-top: 10px;
      color: var(--red);
      font-weight: bold;
      margin-left: 7px;
      font-size: 20px;
      animation-name: fade;
      animation-duration: 1s;
    }
  }
  .mensagem {
    margin-top: 21px;
    width: 377px;
    height: 95px;
    display: flex;
    border-radius: 5px;
    border: 1px solid var(--grey-0);
    justify-content: center;
    align-items: center;
    .bag {
      background-color: #27ae601a;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 50px;
      margin: 10px;
      border-radius: 5px;
    }
    p {
      color: var(--grey-50);
      font-size: 14px;
      animation-name: fade;
      animation-duration: 1s;
    }
  }
  @media (max-width: 1000px) {
    margin-bottom: 30px;
    margin-left: 50px;
    width: 100%;
    align-items: center;
    margin-left: 0px;
    .mensagem {
      width: 50%;
      min-width: 320px;
    }
  }
`;
