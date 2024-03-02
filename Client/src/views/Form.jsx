import { useState } from "react";
import { validation } from "../helpers/validate";
import { FormLogin } from "../styled/formStyled";
import { LabelLogin } from "../styled/labelStled";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    correo: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    correo: "Email requerido",
    password: "Password requerido",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  function handleSubmit(event) {
    event.preventDefault();
    login(userData);
  }

  function diseableHandler() {
    let disabled;
    for (let error in errors) {
      if (errors[error] === "") disabled = false;
      else {
        disabled = true;
        break;
      }
    }
    return disabled;
  }

  return (
    <FormLogin onSubmit={handleSubmit}>
      <LabelLogin>Login</LabelLogin>
      <label>correo:</label>
      <input
        type="text"
        name="correo"
        value={userData.correo}
        onChange={handleChange}
        placeholder="ingresa correo"
      />

      <span>{errors.correo}</span>
      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={userData.password}
        placeholder="ingresa tu Password"
        onChange={handleChange}
      />
      {errors.password && <span>{errors.password}</span>}

      <button disabled={diseableHandler()} type="submit">
        SUBMIT
      </button>
    </FormLogin>
  );
};
export default Form;
