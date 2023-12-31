import React, { useState } from "react";

import { LoginUser, logout } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

export const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    dispatch(LoginUser({ email, password }));
    e.preventDefault();
  };

  const logoutHandler = () => {
    dispatch(logout);
  };

  const H1 = styled.h1`
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-top: 20px;
    color: orange;
    text-align: center;
    text-transform: uppercase;
  `;

  // const Input = styled.input`
  //   padding: 10px;
  //   border-radius: 10px;
  //   margin-bottom: 5px;
  //   outline: none;
  //   color: white;
  //   background-color: skyblue;
  // `;

  const Input = styled.input`
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 5px;
    outline: none;
    color: white;
    background-color: skyblue;
  `;
  const SubmitButton = styled.button`
    padding: 10px 20px;
    border-radius: 10px;
    margin-top: 20px;
    background-color: blue;
    color: white;
  `;

  return (
    <div>
      <div className="container">
        <H1>Log in</H1>

        <form className="mt-20 text-center">
          <div>
            <Input
              placeholder="Userneme"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <SubmitButton onClick={loginHandler} type="submit">
            Log in
          </SubmitButton>
          <button onClick={logoutHandler}>log out</button>
        </form>
      </div>
    </div>
  );
};
