import { useState } from "react";
import { useLocation } from "react-router-dom";
import { InputStyled } from "../styled/inputStyled";
import { Button } from "../styled/button";
import { FlexContainer } from "../styled/searchItems";

export default function SearchBar({ onSearch, isActiveButtons }) {
  const [id, setId] = useState("");
  const location = useLocation();

  function changeHandler(event) {
    setId(event.target.value);
  }

  return (
    <div>
      <FlexContainer>
      
      {isActiveButtons && location.pathname === "/home" ? (
        <InputStyled
        type="search"
        onChange={changeHandler}
        value={id}
        placeholder="Search Character"
        />
        ) : (
          ""
          )}

      {isActiveButtons && location.pathname === "/home" ? (
        <Button
        onClick={() => {
          onSearch(id);
        }}
        >
          Agregar
        </Button>
      ) : (
        ""
        )}
        </FlexContainer>
    </div>
  );
}
