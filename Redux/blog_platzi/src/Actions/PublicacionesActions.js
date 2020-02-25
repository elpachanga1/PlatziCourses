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

    const nuevas = respuesta.data.map(publicacion => ({
      ...publicacion,
      comentarios: [],
      abierto: false
    }));

    const publicaciones_actualizadas = [...publicaciones, nuevas];

    dispatch({
      type: Types.ACTUALIZAR,
      payload: publicaciones_actualizadas
    });

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
  } catch (error) {
    console.log("Error: ", error.message);
    dispatch({
      type: Types.ERROR,
      payload: "Publicaciones no Disponibles"
    });
  }
};

export const AbrirCerrar = (pub_key, com_key) => (dispatch, getState) => {
  const { publicaciones } = getState().PublicacionesReducer;
  const seleccionada = publicaciones[pub_key][com_key];

  const actualizada = {
    ...seleccionada,
    abierto: !seleccionada.abierto
  };

  //se debe recorrer cada parte del arreglo para poder llegar al punto especifico y asi sobreescribir la posicion de memoria con la ultima actualizacion del elemento deseado
  const publicaciones_actualizadas = [...publicaciones];
  publicaciones_actualizadas[pub_key] = [...publicaciones[pub_key]];
  publicaciones_actualizadas[pub_key][com_key] = actualizada;

  dispatch({
    type: Types.ACTUALIZAR,
    payload: publicaciones_actualizadas
  });
};

export const TraerComentarios = (pub_key, com_key) => async (
  dispatch,
  getState
) => {
  dispatch({
    type: Types.COM_CARGANDO
  });

  const { publicaciones } = getState().PublicacionesReducer;
  const seleccionada = publicaciones[pub_key][com_key];

  try {
    const respuesta = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${seleccionada.id}`
    );

    const actualizada = {
      ...seleccionada,
      comentarios: respuesta.data
    };

    const publicaciones_actualizadas = [...publicaciones];
    publicaciones_actualizadas[pub_key] = [...publicaciones[pub_key]];
    publicaciones_actualizadas[pub_key][com_key] = actualizada;

    dispatch({
      type: Types.COM_ACTUALIZAR,
      payload: publicaciones_actualizadas
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: Types.COM_ERROR,
      payload: "Comentarios no Disponibles"
    });
  }
};
