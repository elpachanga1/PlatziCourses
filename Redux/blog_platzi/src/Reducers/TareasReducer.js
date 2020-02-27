import * as Types from "../Types/TareasTypes";

const INITIAL_STATE = {
  tareas: {},
  cargando: false,
  error: "",
  usuario_id: "",
  titulo: "",
  regresar: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.TRAER_TAREAS:
      return {
        ...state,
        tareas: action.payload,
        cargando: false,
        error: "",
        regresar: false
      };
    case Types.CARGANDO:
      return { ...state, cargando: true, error: "" };
    case Types.ERROR:
      return { ...state, cargando: false, error: action.payload };
    case Types.CAMBIO_USUARIO_ID:
      return { ...state, usuario_id: action.payload };
    case Types.CAMBIO_TITULO:
      return { ...state, titulo: action.payload };
    case Types.GUARDAR_TAREA:
      return {
        ...state,
        tareas: {},
        cargando: false,
        error: "",
        regresar: true,
        usuario_id: "",
        titulo: ""
      };
    case Types.ACTUALIZAR_TAREA:
      return { ...state, tareas: action.payload };
    case Types.LIMPIAR_TAREA:
      return { ...state, usuario_id: "", titulo: "" };
    default:
      return state;
  }
};
