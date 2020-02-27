import { combineReducers } from "redux";
import UsuariosReducer from "./UsuariosReducers";
import PublicacionesReducer from "./PublicacionesReducer";
import TareasReducer from "./TareasReducer";

export default combineReducers({
  UsuariosReducer,
  PublicacionesReducer,
  TareasReducer
});
