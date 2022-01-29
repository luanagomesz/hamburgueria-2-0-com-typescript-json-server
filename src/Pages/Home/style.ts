import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  height: 80px;
  width: 100%;
  background-color: var(--grey-0);
  display: flex;
  align-items: center;
  justify-content: space-around;

  .containerMobile {
    display: none;
  }
  #logout {
    color: var(--grey-50);
    margin-left: 25px;
    font-size: 23px;
    margin-bottom: 5px;
    font-weight: bold;
    cursor: pointer;
    :hover {
      color: var(--grey-100);
    }
  }
  .containerRigth {
    display: flex;
    justify-content: center;
    align-items: center;
    .cart {
      margin-left: 20px;
      color: var(--grey-50);
      font-size: 20px;
      cursor: pointer;
      :hover {
        color: var(--grey-100);
      }
      .value {
        font-size: 13px;
        background-color: var(--green);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        position: absolute;
        width: 17px;
        margin-top: -35px;
        color: white;
        margin-left: 13px;
        font-weight: bold;
      }
    }
  }
  .searchContainer {
    border: 1px solid var(--grey-20);
    border-radius: 6px;
    display: flex;
    align-items: center;
    height: 50px;
    width: 250px;
    background-color: white;

    input {
      border: none;
      width: 75%;
      color: var(--grey-50);
      padding: 10px;
      font-size: 15px;
      ::placeholder {
        color: var(--grey-20);
      }
    }

    .searchButton {
      border-radius: 8px;
      background-color: var(--green);
      color: white;
      width: 53px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      :hover {
        background-color: white;
        border: 2px solid var(--green);
        color: var(--green);
      }
    }
  }

  .titulo {
    display: flex;
    align-items: center;
    cursor: pointer;
    h1 {
      font-size: 35px;
    }
    span {
      margin-top: 10px;
      color: var(--red);
      font-weight: bold;
      margin-left: 7px;
      font-size: 20px;
    }
  }
  @media (max-width: 1000px) {
    .searchContainer {
      display: none;
    }

    .containerMobile {
      display: flex;
    }
  }
`;

export const ProductsContainer = styled.main`
  width: 85%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  @media (max-width: 1000px) {
    width: 90%;
    overflow-y: hidden;
    flex-wrap: nowrap;
    overflow-x: auto;
    align-items: baseline;
    justify-content: flex-start;
  }
`;
