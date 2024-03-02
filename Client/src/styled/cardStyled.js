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

export const CardStyle = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-between; /* Ajustando el espacio entre los elementos */
  opacity: 50%;
  background-color: rgba(0, 0, 10, 0.3);
  flex-wrap: nowrap;
  text-shadow: 3px 2px 2px black;
  border-radius: 5px;
  padding: 10px;
  margin: 1%;
  border: 2px solid blueviolet;
  border-radius: 15px;
  font-size: 10px;
  font-family: 'Courier New', Courier, monospace, sans-serif;
  width: 200px;
  overflow: hidden;
  height: 350px;
  animation: ${slideIn} 1s ease-in-out forwards, ${fadeIn} 1s ease-in-out forwards;
`;

export const Image = styled.img`
  display: block;
  width: 100px; 
  border-radius: 50%;
  border: 2px solid blueviolet;
  height: auto;
  margin: 10px 0;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  opacity: 0;
  animation: ${slideIn} 1s ease-in-out forwards, ${fadeIn} 1s ease-in-out forwards;
  overflow: hidden;
`;