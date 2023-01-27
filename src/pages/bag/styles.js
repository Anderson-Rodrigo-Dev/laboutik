import styled from "styled-components";

import { RxCrossCircled } from "react-icons/rx";

export const BagContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto 100px;
`;

export const BagEmpty = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 24px;

    span {
      color: red;
    }
  }

  button {
    padding: 10px 40px;
    border: 1px solid #f9cdc8;
    cursor: pointer;
    transform: 0.3s ease-in-out;
    margin-top: 40px;

    &:hover {
      background-color: #f9cdc8;
    }
  }
`;

export const ProductsInBag = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

export const ProductInBag = styled.div`
border: 1px solid #f9cdc8;
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
`;

export const ImageAndTitle = styled.div`
  display: flex;
  align-items: center;
  width: 30%;

  img {
    width: 70px;
    height: 100px;
    object-fit: contain;
    margin-right: 10px;
  }
`;

export const QtdContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  width: 30%;
  border-left: 1px solid #f9cdc8;
  border-right: 1px solid #f9cdc8;
  gap: 5px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    width: 25px;
    height: 25px;
    cursor: pointer;
    color: #fff;
    font-size: 24px;
    background-color: #bf5546;

    &:disabled {
      cursor: default;
      opacity: 0.6;
    }
  }

  span {
    width: 30px;
    height: 30px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const PriceContainer = styled.div`
  width: 30%;
`;

export const IconDelete = styled(RxCrossCircled)`
  font-size: 20px;
  cursor: pointer;
  color: #bf5546;
`;

export const PriceTotal = styled.div`
  align-self: end;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
  height: 50px;

  p {
    font-size: 14px;
  }
  span {
    font-size: 24px;
    font-weight: bold;
    margin-left: 10px;
  }
`;
