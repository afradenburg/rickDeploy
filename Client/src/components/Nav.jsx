import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Button } from "../styled/button";
import { HeaderApp } from "../styled/headerStyle";
import { LinksStyled } from "../styled/linksStyled";
import { SearchStyled } from "../styled/searchStyled";
import {StyledLink} from "../styled/linkStyled"

function Nav({ onSearch, randomize, logOut, isActiveButtons }) {
  const location = useLocation();

  return (
    <HeaderApp>
      <LinksStyled>
        
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/home">Home</StyledLink>
          <StyledLink to="/favorites">Favorites </StyledLink>
        <div>
          <Button onClick={logOut}>log out</Button>
        </div>
      </LinksStyled>
      <SearchStyled>
        <SearchBar onSearch={onSearch} isActiveButtons={isActiveButtons} />
        {location.pathname === "/home" && isActiveButtons ? (
          <>
            <Button onClick={randomize}>ADD RANDOM</Button>
          </>
        ) : (
          ""
        )}
      </SearchStyled>
    </HeaderApp>
  );
}

export default Nav;
