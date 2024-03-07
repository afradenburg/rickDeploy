import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/actions"
import { StyledLink } from "../styled/linkStyled";
import { FormLogin } from "../styled/formStyled";

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
    <FormLogin onSubmit={handleSubmit}>
      Registrate
      <label>Correo electronico:</label>
      <input style={{marginTop:"15px"}} type="correo" name="correo" placeholder="ingresa correo" onChange={handleNewUser}/>
      <label>ingresa contraseña:</label>
      <input style={{marginTop:"15px"}} type="password" name="password" placeholder="ingresa password" onChange={handleNewUser}/>
      <button style={{marginTop:"15px"}} type="submit">Registrar</button>
      <StyledLink to={"/"}>volver</StyledLink>
    </FormLogin>
  );
};

export default Register;