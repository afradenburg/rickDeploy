import styled from "styled-components";
import gifBackground from "../assets/rick-mid.jpg"

export const BackGif = styled.body`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1% 1%; 
  width: 100%;
  gap: 20px;
  color: white;
  background-image: url(${gifBackground});
  background-position: center;
  background-size: cover;
`;