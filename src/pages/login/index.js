import * as S from "./styles";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/userContext";

const Login = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const [formError, setFormError] = useState("");

  const navigate = useNavigate();

  const { setIsLogged } = useUserContext();

  const handleChange = (e) => {
    setFormError("");
    const { name, value } = e.target;

    setUser((prev) => {
      const newUser = { ...prev, [name]: value };

      return newUser;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormError("");

    if (!user.name || !user.password) {
      setFormError("fill in all fields!");
      return;
    }

    if (user.name === "admin" && user.password === "admin") {
      sessionStorage.setItem("userName", JSON.stringify(user.name));

      setIsLogged(true);

      alert("Login sucessfull!");

      navigate("/admin/newproduct");
    } else setFormError("Wrong user or password!");
  };

  return (
    <S.LoginContainer>
      <h1>Login:</h1>
      <S.FormContainer onSubmit={handleSubmit}>
        {formError && (
          <S.DivError>
            <p>{formError}</p>
          </S.DivError>
        )}
        <label>
          <span>username:</span>
          <input
            type="text"
            name="name"
            autoComplete="off"
            value={user.name}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>password:</span>
          <input
            type="password"
            name="password"
            autoComplete="off"
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <S.Submit value="Sign in" />
      </S.FormContainer>
    </S.LoginContainer>
  );
};

export default Login;
