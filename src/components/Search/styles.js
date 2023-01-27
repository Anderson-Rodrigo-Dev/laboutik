import styled from "styled-components";

import { AiOutlineSearch } from "react-icons/ai";

export const SearchContainer = styled.form`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Search = styled.input.attrs({ type: "search" })`
  width: 100%;
  height: 100%;
  padding: 10px 15px;
  border: 1px solid #b2b2b2;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  &:hover {
    border: 1px solid #000;
  }

  &::placeholder {
    color: #b2b2b2;
  }
`;

export const IconContainer = styled.button`
  background: #FBF1EF;
  width: 40px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #b2b2b2;
  border-right: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  cursor: pointer;
`;

export const IconSearch = styled(AiOutlineSearch)`
  color: #b2b2b2;
`;
