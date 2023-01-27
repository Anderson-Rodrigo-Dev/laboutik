import styled from "styled-components";

import { BiTrash } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";

export const EditContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

export const SearchForm = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 50px;
`;

export const Search = styled.input.attrs({ type: "search" })`
  width: 200px;
  height: 40px;
  padding: 10px 15px;
  border: 1px solid #b2b2b2;
  border-radius: 5px;
  margin-top: 40px;

  &:hover {
    border: 1px solid #000;
  }

  &::placeholder {
    color: #b2b2b2;
  }
`;

export const ProductsList = styled.ul`
  width: 800px;
  margin: 0 0 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const ProductItem = styled.li`
  display: flex;
  width: 800px;
  height: 120px;
  border: 1px solid #f9cdc8;
  justify-content: center;
  gap: 30px;
`;

export const ProductInfos = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  img {
    width: 70px;
    height: 100px;
    background-color: white;
    object-fit: contain;
    margin: 0 20px;
  }

  h3 {
    width: 250px;
    font-size: 18px;
    font-weight: 400;
  }

  p {
    margin: 0 20px;
    width: 70px;
  }
`;

export const IconContainer = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconTrash = styled(BiTrash)`
  margin: 0 10px;
  font-size: 20px;
  cursor: pointer;
`;
export const IconPencil = styled(BsPencil)`
  margin: 0 10px;
  font-size: 20px;
  cursor: pointer;
`;
