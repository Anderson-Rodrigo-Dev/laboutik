import styled from "styled-components";

export const FormContainer = styled.form`
  width: 400px;
  height: 500px;
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

  label input,
  label textarea {
    width: 100%;
    border: none;
    padding: 5px;
    border-bottom: 1px solid #cecece;
    outline: none;
  }

  label input {
    height: 30px;
  }

  label textarea {
    height: 60px;
    resize: none;
  }
`;

export const Submit = styled.input.attrs({ type: "submit" })`
  background-color: transparent;
  border: 1px solid #d3614a;
  padding: 8px 6px 8px 8px;
  cursor: pointer;
  transform: 0.3s ease-in-out;

  &:hover {
    background-color: #f4c7c7;
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
