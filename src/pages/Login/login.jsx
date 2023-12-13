import React, { useState } from "react";
import styled from "styled-components";
import { z } from "zod";


export const Login = () => {

  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(10),
    text: z.string().min(2),
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      loginSchema.parse({ email, password, text });
  
      console.log("Login successful!");
    } catch (error) {
      setErrors([error.message]);
    }
  };

  const H1 = styled.h1`
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1;
    margin-top: 20px;
    color: orange;
    text-align: center;
    text-transform: uppercase;
  `;

  const Input = styled.input`
    padding-left: 8px;
    padding-right: 150px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 10px;
    margin-bottom: 5px;
    outline: none;
    color: white;
    background-color: skyblue;
  `;

  const Submitbutton = styled.button`
    padding: 10px 20px;
    border-radius: 10px;
    margin-top: 20px;
    background-color: blue;
    color: white;
  `;
  return (
    <div>
      <div className="container">
        <H1>Login</H1>
        {errors.length > 0 && (
          <ul>
            {errors.map((error, index) => (
              <li key={index}>
                <h1>{error.password}</h1>
                <h1>{error.Username}</h1>
                <h1>{error.email}</h1>
              </li>
            ))}
          </ul>
        )}
        <form className="mt-20 text-center" onSubmit={handleSubmit}>
          <div>
            <Input
              placeholder="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Input
              placeholder="userneme"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>
          <div>
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Submitbutton type="submit">Submit</Submitbutton>
        </form>
      </div>
    </div>
  );
};
