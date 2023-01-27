import styled from "styled-components";

export const Rotate = styled.div`
  animation: rotate 1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #6c63ff;
  height: 50px;
  margin: 0 auto;
  width: 50px;
  @keyframes rotate {
    to {
      transform: rotate(1turn);
    }
  }
`;
