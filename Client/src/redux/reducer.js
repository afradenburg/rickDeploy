import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./actionsTypes";

let initialState = { characters: [], myFavorites: [], allCharactersFav: [] };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return { ...state, 
        myFavorites: action.payload, 
        allCharactersFav: action.payload 
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharactersFav: action.payload
      };

    case FILTER:
      const allCharactersFiltered = state.allCharactersFav.filter(
        (character) => character.gender === action.payload
      );
      return {
        ...state,
        myFavorites: allCharactersFiltered,
      };
    case ORDER:
      const allCharactersFavCopy = [...state.allCharactersFav];
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
            : allCharactersFavCopy.sort((a, b) => b.id - a.id),
      };
    case RESET:
      return {
        ...state,
        myFavorites: state.allCharactersFav,
      };

    default:
      return state;
  }
};

export default rootReducer;
