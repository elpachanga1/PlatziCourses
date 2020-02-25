import * as Types from "../Types/PublicacionesTypes";

const INITIAL_STATE = {
  publicaciones: [],
  cargando: false,
  error: "",
  com_cargando: false,
  com_error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.ACTUALIZAR:
      return {
        ...state,
        publicaciones: action.payload,
        cargando: false,
        error: ""
      };
    case Types.CARGANDO:
      return { ...state, cargando: true, error: "" };
    case Types.ERROR:
      return { ...state, cargando: false, error: action.payload };
    case Types.COM_ACTUALIZAR:
      return {
        ...state,
        publicaciones: action.payload,
        com_cargando: false,
        com_error: ""
      };
    case Types.COM_CARGANDO:
      return { ...state, com_cargando: true, com_error: "" };
    case Types.COM_ERROR:
      return { ...state, com_cargando: false, com_error: action.payload };
    default:
      return state;
  }
};
