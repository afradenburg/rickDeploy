import styled from "styled-components";
import imageLogo from "../assets/rick.jpg"

export const FormLogin = styled.form`
  background-image: url(${imageLogo});
  background-position: center;
  background-size: cover;
  display: flex;
  margin: 10% 0;
  padding: 4% 4%;
  max-width: 500px;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  text-orientation: initial;
  line-height: 2;
  color: white;
  text-shadow: 5px 1px 5px blueviolet;
  border: 1px solid white;
  border-radius: 15px;
  box-shadow: 7px 5px 5px blueviolet;
`;
