import axios from "axios";
import * as Types from "../Types/TareasTypes";

export const TraerTareas = () => async dispatch => {
  dispatch({
    type: Types.CARGANDO
  });

  try {
    const respuesta = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    const tareas = {};
    //Se mapea la respuesta con las tareas por userId
    respuesta.data.map(
      tar =>
        (tareas[tar.userId] = {
          ...tareas[tar.userId],
          [tar.id]: {
            ...tar
          }
        })
    );

    dispatch({
      type: Types.TRAER_TAREAS,
      payload: tareas
    });
  } catch (error) {
    //console.log("Error: ", error.message);
    dispatch({
      type: Types.ERROR,
      payload: "Informacion de tareas no disponible"
    });
  }
};

export const CambioUsuarioID = usuario_id => dispatch => {
  dispatch({
    type: Types.CAMBIO_USUARIO_ID,
    payload: usuario_id
  });
};

export const CambioTitulo = titulo => dispatch => {
  dispatch({
    type: Types.CAMBIO_TITULO,
    payload: titulo
  });
};

export const AgregarTarea = nueva_tarea => async dispatch => {
  dispatch({
    type: Types.CARGANDO
  });

  try {
    //request esta fallando por permisos CORS del lado del servidor
    const respuesta = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      nueva_tarea
    );

    //console.log(respuesta);

    dispatch({
      type: Types.GUARDAR_TAREA
    });
  } catch (error) {
    //console.log("Error: ", error.message);
    dispatch({
      type: Types.ERROR,
      payload: "Agregado de tareas no disponible"
    });
  }
};

export const EditarTarea = tarea_editada => async dispatch => {
  dispatch({
    type: Types.CARGANDO
  });

  try {
    //request esta fallando por permisos CORS del lado del servidor
    const respuesta = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${tarea_editada.id}`,
      tarea_editada
    );

    //console.log(respuesta);

    dispatch({
      type: Types.GUARDAR_TAREA
    });
  } catch (error) {
    //console.log("Error: ", error.message);
    dispatch({
      type: Types.ERROR,
      payload: "Editado de tareas no disponible"
    });
  }
};

export const CambioCheck = (usu_id, tar_id) => (dispatch, getState) => {
  const { tareas } = getState().TareasReducer;
  const seleccionada = tareas[usu_id][tar_id];

  const tareas_actualizadas = { ...tareas };
  tareas_actualizadas[usu_id] = { ...tareas[usu_id] };
  tareas_actualizadas[usu_id][tar_id] = {
    ...tareas_actualizadas[usu_id][tar_id],
    completed: !seleccionada.completed
  };

  dispatch({
    type: Types.ACTUALIZAR_TAREA,
    payload: tareas_actualizadas
  });
};

export const Eliminar = tar_id => async dispatch => {
  dispatch({
    type: Types.CARGANDO
  });

  try {
    //request esta fallando por permisos CORS del lado del servidor
    const respuesta = await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${tar_id}`
    );

    //console.log(respuesta);

    dispatch({
      type: Types.TRAER_TAREAS,
      payload: {}
    });
  } catch (error) {
    //console.log("Error: ", error.message);
    dispatch({
      type: Types.ERROR,
      payload: "Eliminado de tareas no disponible"
    });
  }
};

export const LimpiarForma = () => dispatch => {
  dispatch({
    type: Types.LIMPIAR_TAREA
  });
};
