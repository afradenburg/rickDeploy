import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../redux/actions";
import { connect } from "react-redux";
import { Image, CardStyle } from "../styled/cardStyled";
import { Button } from "../styled/button";
import { ButtonContainer } from "../styled/buttonContainer";


function Card(props) {
  const navigate = useNavigate();
  const {
    character,
    myFavorites,
    addFav,
    removeFav,
    onClose,
    isActiveButtons,
  } = props;
  const [isFav, setFav] = useState(false);

  function navigateHandler() {
    navigate(`/detail/${character.id}`);
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === character.id) {
        setFav(true);
      }
    });
  }, [myFavorites]);

  function handleFavorite(character) {
    if (!isFav) {
      addFav(character); //{}
      setFav(true);
    } else {
      removeFav(character); //id
      setFav(false);
    }
  }
  return (
    <CardStyle>
        <ButtonContainer>
      {isFav ? (
<Button
          onClick={() => {
            handleFavorite(character.id);
          }}
        >
          ❤️
        </Button>
      ) : (
        <Button
          onClick={() => {
            handleFavorite(character);
          }}
        >
          🤍
        </Button>
      )}
      {isActiveButtons ? (
        <Button
          onClick={() => {
            onClose(character.id);
          }}
        >
          X
        </Button>
      ) : (
        ""
      )}
        </ButtonContainer>
        
      <h2>Name: {character.name}</h2>
      <h2>Species: {character.species}</h2>
      <h2>Gender: {character.gender}</h2>
      <Image
        src={character.image}
        alt={character.name}
        onClick={navigateHandler}
      />
    </CardStyle>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
