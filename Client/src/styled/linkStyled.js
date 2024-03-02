import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  
 display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: aliceblue;
  font-weight: bold;
  border-radius: 17px;
  flex-wrap: nowrap;
  flex-direction: row;
  gap: 15px;
  border: 2px solid blueviolet; 
  background-color: rgba(0, 0, 10, 0.3);
  padding: 5px; /* Ajustando el espaciado interno */
  opacity: 0.9;

  &:hover {
    color: greenyellow;
    text-decoration: underline;
  }
`;

