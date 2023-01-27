import styled from "styled-components";

import { BsCart4 } from "react-icons/bs";

export const ProductDetailsContainer = styled.div`
  border-radius: 5px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  margin: 30px 0 100px 0;

  img {
    width: 250px;
    height: 320px;
    border-radius: 5px;
    padding: 0 30px;
    background-color: #fff;
    object-fit: contain;
    transition: 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Info = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 0 30px;
`;

export const ProductDetails = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    font-size: 18px;
    text-align: start;
  }

  h3 {
    font-size: 12px;
    margin: 7px 0 20px;
    font-weight: 400;
  }
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  text-align: justify;
  max-height: 200px;
  overflow: auto;
  overflow-y: auto;
  -webkit-box-shadow: 0 4px 6px -6px #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 4px 6px -6px #222;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PriceValue = styled.div`
  display: flex;
  align-self: end;
  align-items: center;

  h3 {
    font-size: 30px;
    color: #009469;
    text-align: end;
    margin: 5px 0;
  }
`;

export const ContainerBuy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddToBag = styled.button`
  background-color: #f9cdc8;
  border: 1px solid #f9cdc8;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: transparent;

    svg {
      animation: shake 0.2s;
      animation-iteration-count: 3;

      @keyframes shake {
        0% {
          transform: rotate(0deg);
        }

        50% {
          transform: rotate(-10deg);
        }

        100% {
          transform: rotate(10deg);
        }
      }
    }
  }
`;

export const IconCart = styled(BsCart4)`
  font-size: 24px;
  transition: 0.3s ease-in;
`;
