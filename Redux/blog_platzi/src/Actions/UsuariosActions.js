import axios from "axios";
import * as Types from "../Types/UsuariosTypes";

export const TraerTodos = () => async dispatch => {
  dispatch({
    type: Types.CARGANDO
  });

  try {
    const respuesta = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    dispatch({
      type: Types.TRAER_TODOS,
      payload: respuesta.data
    });
  } catch (error) {
    console.log("Error: ", error.message);
    dispatch({
      type: Types.ERROR,
      payload: "Se presento un error, intenta de nuevo: " + error.message
    });
  }
};
