import { connect, useDispatch } from "react-redux";
import Cards from "../components/Cards";
import { filterCards, orderCards, reset } from "../redux/actions";
import { FilterStyle, OptionStyled, SelectStyled } from "../styled/selectFavorites";
import { Button } from "../styled/button";

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  function resetHandler() {
    dispatch(reset());
  }

  return (
    <div>

    <FilterStyle>
      <SelectStyled onChange={handleOrder}>
        <OptionStyled value="A">Ascendente</OptionStyled>
        <OptionStyled value="B">Descendente</OptionStyled>
      </SelectStyled>

      <SelectStyled onChange={handleFilter}>
        <OptionStyled value="Male">Male</OptionStyled>
        <OptionStyled value="Female">Female</OptionStyled>
        <OptionStyled value="Gender less">Gender less</OptionStyled>
        <OptionStyled value="unknown">unknown</OptionStyled>
      </SelectStyled>
      <Button onClick={resetHandler}>RESET</Button>
    </FilterStyle>
    <div>
      <Cards characters={myFavorites} isActiveButtons={false} />
    </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
