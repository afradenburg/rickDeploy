import styled from "styled-components";
import headerLogo from "../assets/portal.gif"

export const HeaderApp = styled.header`
  background-image: url(${headerLogo});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3% 1%;
  width: 100%;
  height: 600;
  flex-wrap: wrap;

`;
