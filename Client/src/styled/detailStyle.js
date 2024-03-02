import styled, { keyframes } from 'styled-components';
import imageCard from '../assets/cardPortal.jpg';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const DetailStyle = styled.div`
  color: white;
  display: flex;
  background-color: rgba(0, 0, 10, 0.3);
  flex-direction: column; 
  flex-wrap: nowrap;
  text-align: center; /* Ajustando el texto a la derecha */
  text-shadow: 3px 2px 2px black;
  border-radius: 5px;
  padding: 10px;
  /* align-items: flex-start; */
  margin: 1%;
  border: 2px solid blueviolet;
  border-radius: 15px;
  font-size: 75%;
  font-family: 'Courier New', Courier, monospace, sans-serif;
  width: 500px;
  overflow: hidden;
  height: 300px;
  animation: ${slideIn} 1s ease-in-out forwards, ${fadeIn} 1s ease-in-out forwards;
`;
