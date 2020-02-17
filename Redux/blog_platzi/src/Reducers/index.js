import { combineReducers } from "redux";
import UsuariosReducer from "./UsuariosReducers";
import PublicacionesReducer from "./PublicacionesReducer";

export default combineReducers({
  UsuariosReducer,
  PublicacionesReducer
});
