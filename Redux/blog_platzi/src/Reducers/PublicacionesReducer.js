import * as Types from "../Types/PublicacionesTypes";

const INITIAL_STATE = {
  publicaciones: [],
  cargando: false,
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.TRAER_POR_USUARIO:
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
    default:
      return state;
  }
};
