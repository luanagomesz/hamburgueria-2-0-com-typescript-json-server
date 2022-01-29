import styled from "styled-components";

export const Card = styled.div`
  width: 90%;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;

  h2 {
    color: var(--grey-100);
    font-size: 20px;
  }
  svg {
    color: var(--grey-50);
    margin-right: -20px;

    :hover {
      cursor: pointer;
      color: var(--grey-100);
    }
  }
  figure {
    background-color: var(--grey-20);
    border-radius: 5px;
  }
  img {
    width: 70px;
  }
`;
