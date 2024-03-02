import styled from 'styled-components';
import imgAbout from "../assets/fotoAbout.jpeg"


export const ConteinAbout = styled.div`
  background-image: url(${imgAbout});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  border: 1px solid blueviolet;
  background-color: rgba(0, 0, 10, 0.3);  
  justify-content: center;
  padding: 20px; /* Agregando un espacio interno para el contenido */
  margin: 1%;
  border-radius: 15px;
  width: 500px;
  height: 500px;
  `


export const StyledH1 = styled.h1`
  font-size: 20px; /* Agrandando la letra */
  font-family: 'Helvetica', Arial, sans-serif; /* Cambiando la fuente a una mejor */
  color: white;
  text-align: center;
  text-shadow: 3px 2px 2px black;
`;

export const LinkedInIcon = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: blueviolet;
  font-size: 50px;
  text-decoration: none;
`;

export const GithubInIcon = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: black;
  font-size: 50px;
  text-decoration: none;
`;


