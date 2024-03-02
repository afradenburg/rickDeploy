import styled from "styled-components"


export const Button = styled.button`
display: flex;
flex-direction: row;
justify-content: right;
background: blueviolet;
background-color: rgba(0, 0, 10, 0.3);
color: white;
cursor: pointer;
margin: 1em;
padding: 5px 13px;
border: 1px solid #69f;
border-radius: 50px;

&:hover {
    color: red;
    text-decoration: underline;
}
` 

