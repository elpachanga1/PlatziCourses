import axios from "axios";

import * as Types from "../Types/PublicacionesTypes";
import * as UsuariosTypes from "../Types/UsuariosTypes";

const { TRAER_TODOS: USUARIOS_TRAER_TODOS } = UsuariosTypes;

export const TraerPorUsuario = key => async (dispatch, getState) => {
  const { usuarios } = getState().UsuariosReducer;
  const { publicaciones } = getState().PublicacionesReducer;

  const UsuarioID = usuarios[key].id;

  dispatch({
    type: Types.CARGANDO
  });

  try {
    const respuesta = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${UsuarioID}`
    );

    const publicaciones_actualizadas = [...publicaciones, respuesta.data];
    const publicaciones_key = publicaciones_actualizadas.length - 1;
    const usuarios_actualizados = [...usuarios];

    usuarios_actualizados[key] = {
      ...usuarios[key],
      publicaciones_key
    };

    dispatch({
      type: USUARIOS_TRAER_TODOS,
      payload: usuarios_actualizados
    });

    dispatch({
      type: Types.TRAER_POR_USUARIO,
      payload: publicaciones_actualizadas
    });
  } catch (error) {
    console.log("Error: ", error.message);
    dispatch({
      type: Types.ERROR,
      payload: "Se presento un error, intenta de nuevo: " + error.message
    });
  }
};
