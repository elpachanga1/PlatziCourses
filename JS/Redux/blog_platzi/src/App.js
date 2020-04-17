import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Usuarios from "./Components/Usuarios";
import Publicaciones from "./Components/Publicaciones";
import Tareas from "./Components/Tareas";
import GuardarTareas from "./Components/Tareas/GuardarTarea";

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className="margen">
      <Route exact path="/" component={Usuarios} />
      <Route exact path="/tareas" component={Tareas} />
      <Route exact path="/tareas/guardar" component={GuardarTareas} />
      <Route
        exact
        path="/tareas/guardar/:usu_id/:tar_id"
        component={GuardarTareas}
      />
      <Route
        exact
        path="/tareas/eliminar/:usu_id/:tar_id"
        component={GuardarTareas}
      />
      <Route exact path="/publicaciones/:key" component={Publicaciones} />
    </div>
  </BrowserRouter>
);

export default App;
