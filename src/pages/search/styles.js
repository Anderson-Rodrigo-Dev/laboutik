import styled from "styled-components";

export const ContainerSearch = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  justify-content: center;
  position: relative;
  top: ${({ scroll }) => (scroll > 194 ? "150px" : "0")};
`;
