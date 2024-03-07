import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/actions"
import { StyledLink } from "../styled/linkStyled";

const Register = () =>  {

    const dispatch = useDispatch()

    const [newUser, setNewUser] = useState({
      correo: "",
      password: "",
    });

    const handleNewUser = (event) => {
      setNewUser({
        ...newUser,
        [event.target.name]: event.target.value,
      });
    };

    function handleSubmit(event) {
      event.preventDefault();
      dispatch(createUser(newUser))
      }

  return (
    <form onSubmit={handleSubmit}>
      Registrate
      <input type="correo" name="correo" placeholder="ingresa correo" onChange={handleNewUser}/>
      <input type="password" name="password" placeholder="ingresa password" onChange={handleNewUser}/>
      <button type="submit">Registrar</button>
      <StyledLink to={"/"}>volver</StyledLink>
    </form>
  );
};

export default Register;