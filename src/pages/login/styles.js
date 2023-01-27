import styled from "styled-components";

export const LoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  h1 {
    margin: 30px;
  }
`;

export const FormContainer = styled.form`
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fdeeec;
  border-radius: 5px;
  margin-bottom: 50px;

  label {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }

  label span {
    align-self: flex-start;
    margin-bottom: 10px;
  }

  label input {
    width: 100%;
    border: none;
    padding: 5px;
    border-bottom: 1px solid #cecece;
    outline: none;
  }

  label input {
    height: 30px;
  }
`;

export const Submit = styled.input.attrs({ type: "submit" })`
  background-color: #f9cdc8;
  border: 1px solid #f9cdc8;
  padding: 8px 6px 8px 8px;
  cursor: pointer;
  transform: 0.3s ease-in-out;
  align-self: flex-end;
  margin-right: 40px;

  &:hover {
    background-color: transparent;
    color: black;
  }
`;

export const DivError = styled.div`
  background-color: #f4c7c7;
  width: 80%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dd3d32;
  margin-bottom: 10px;

  p {
    color: #dd3d32;
  }
`;
