import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: rgba(51, 51, 51, 0.5);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  align-items: center;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  max-width: 400px;
  min-width: 320px;
  border-radius: 5px;
  width: 80%;
  animation: fade;
  animation-duration: 500ms;
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .empty {
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
    justify-content: center;
    padding: 40px;
    .buttoon {
      margin-top: 20px;
      animation: fade;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      cursor: pointer;
      :hover {
        color: var(--grey-50);
      }
    }
  }
  .removeAll {
    background-color: var(--grey-20);
    color: var(--grey-50);
    font-size: 20px;
    border-radius: 8px;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 90%;
    padding: 15px;
  }
  .containerItems {
    max-height: 500px;
    width: 90%;
  }
  .topCart {
    display: flex;
    width: 100%;
    background-color: var(--green);
    border-radius: 4px 4px 0px 0px;
    height: 54px;
    align-items: center;
    justify-content: space-between;
    h1 {
      color: white;
      font-size: 20px;
      margin-left: 20px;
    }
    svg {
      margin-right: 20px;
      color: white;
    }
  }
  h2 {
    color: var(--grey-100);
  }
  p {
    color: var(--grey-50);
  }
  .containerItems {
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .pricetotal {
    display: flex;
    width: 90%;
    justify-content: space-between;
    padding-top: 10px;
    border-top: 1px solid var(--grey-20);
    h3 {
      color: var(--grey-50);
    }
    h2 {
      color: var(--grey-50);
    }
  }
`;
