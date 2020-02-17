import * as Types from "../Types/UsuariosTypes";

const INITIAL_STATE = {
  usuarios: [],
  cargando: false,
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.TRAER_TODOS:
      return {
        ...state,
        usuarios: action.payload,
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
