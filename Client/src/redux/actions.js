import { RESET, ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actionsTypes";
import axios from "axios";

export const addFav = (character) => {
  const endpoint = "https://rickdeploy.onrender.com/:3000/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      if(!data.length) throw Error('No hay favoritos')
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log("Error al añadir a favorito", error )
  }
  };
};

export const removeFav = (id) => {
  const endpoint = "https://rickdeploy.onrender.com/:3000/fav/" + id;
  return async (dispatch) => {
    try {
      const {data} = await axios.delete(endpoint)
      if(data.id > 800 ) throw Error(" No hay favoritos con ese id")
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.log("Error al eliminar un favorito", error )
    } 
    }
  };


export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};
export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
export function reset() {
  return {
    type: RESET,
  };
}
