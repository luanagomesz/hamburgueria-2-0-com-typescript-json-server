import styled from "styled-components";

export const Card = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  border: 2px solid var(--grey-20);
  margin-bottom: 50px;
  margin-right: 20px;
  margin-left: 20px;
  border-radius: 5px;
  height: 349px;
  :hover {
    border: 2px solid var(--green);
  }
  @media (max-width: 1000px) {
    margin-bottom: 0px;
    min-width: 250px;
    align-items: baseline;
    justify-content: baseline;
  }
  .imgContainer {
    background-color: var(--grey-0);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 177px;
      height: 177px;
    }
  }
  h2 {
    margin-top: 15px;
    font-size: 18px;
    margin-left: 21px;
    margin-bottom: 15px;
  }
  p {
    margin-left: 21px;
    color: var(--grey-50);
    font-size: 12px;
    margin-bottom: 15px;
  }
  span {
    color: var(--green);
    font-size: 14px;
    margin-bottom: 15px;
    margin-left: 21px;
    font-weight: bold;
  }

  button {
    background-color: var(--green);
    border-radius: 6px;
    margin-bottom: 15px;
    color: white;
    text-align: center;
    width: 106px;
    height: 40px;
    margin-left: 21px;
    :hover {
      background-color: white;
      border: 2px solid var(--green);
      color: var(--green);
    }
  }
`;
