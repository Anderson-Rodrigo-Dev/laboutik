import styled from "styled-components";

import { Link, useNavigate } from "react-router-dom";

import { useUserContext } from "../../context/userContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 140px;
  position: absolute;
  background-color: #fdeeec;
  border-radius: 3px;
  gap: 10px;
  padding: 20px 0;
  left: -34px;
  top: 25px;

  p {
    cursor: pointer;
    border-bottom: 2px solid transparent;

    &: hover {
      border-bottom: 2px solid #d3614a;
    }
  }
`;

const LoginData = ({ setShowDropMenu }) => {
  const { setIsLogged } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLogged(false);
    alert("logout sucessfull!");

    navigate("/");
  };

  return (
    <Container>
      <Link to="/admin/newproduct" onClick={() => setShowDropMenu(false)}>
        <p>New Product</p>
      </Link>
      <Link to="/admin/editproduct" onClick={() => setShowDropMenu(false)}>
        <p>Edit/Delete Product</p>
      </Link>
      <p onClick={handleLogout}>Logout</p>
    </Container>
  );
};

export default LoginData;
