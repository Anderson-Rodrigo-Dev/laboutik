import styled from "styled-components";

export const Fade = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #000;
  opacity: 0.1;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify- content: center;
  z-index: 2;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 500px;
  height: 550px;
  z-index: 3;
  background-color: #fdeeec;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin: 20px 0;
  }

  form {
    width: 90%;
  }
`;
