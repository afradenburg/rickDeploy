import {
  RESET,
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER,
  CREATEUSER,
} from "./actionsTypes";
import axios from "axios";

export const addFav = (character) => {
  const endpoint = "/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      if (data.length > 0) dispatch({ type: ADD_FAV, payload: data });
      console.log(data);
    } catch (error) {
      console.log("Error al añadir a favorito", error);
    }
  };
};
export const createUser = (newUser) => {
  const endpoint = "/newuser";
  return async (dispatch) => {
    try {
      const data = await axios.post(endpoint, newUser);
      console.log(data);
      if (data.status === 201) {
        alert("usuario creado correctamente");
        return dispatch({
          type: CREATEUSER,
          payload: data,
        });
      }
    } catch (error) {
      alert("este correo ya esta en uso");
    }
  };
};

export const removeFav = (id) => {
  const endpoint = "/fav/" + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      if (data.id > 800) throw Error(" No hay favoritos con ese id");
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.log("Error al eliminar un favorito", error);
    }
  };
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
