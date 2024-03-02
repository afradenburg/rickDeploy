import styled from 'styled-components';

export const SelectStyled = styled.select`
display: flex;
align-items: center;
justify-content: center;
padding: 8px;
font-size: 14px;
border: 1px solid blueviolet;
border-radius: 5px;
background-color: white;
color: black;
outline: none;
cursor: pointer;
width: 200px; /* Ancho fijo */


&:hover {
  background-color: lightgray;
}

&:focus {
  border-color: blue;
  box-shadow: 1px 1px 5px blueviolet;
}
`;

export const OptionStyled = styled.option`
  padding: 8px;
`;


export const FilterStyle = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
