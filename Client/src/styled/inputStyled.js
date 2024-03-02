import styled, { keyframes } from 'styled-components';

const neonAnimation = keyframes`
  0% {
    box-shadow: 0 0 10px #00ff00;
  }
  50% {
    box-shadow: 0 0 20px #00ff00, 0 0 30px #00ff00;
  }
  100% {
    box-shadow: 0 0 10px #00ff00;
  }
`;

export const InputStyled = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 16px;
  color: #ffffff;
  background-color: #000000;
  box-shadow: 0 0 10px #00ff00;
  animation: ${neonAnimation} 2s linear infinite;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 20px #00ff00, 0 0 30px #00ff00;
  }

  &:focus {
    box-shadow: 0 0 20px #00ff00, 0 0 40px #00ff00;
  }
`;

