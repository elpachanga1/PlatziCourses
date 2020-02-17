import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../General/Spinner";
import Error from "../General/Error";
import Tabla from "../Usuarios/Tabla";

import * as UsuariosActions from "../../Actions/UsuariosActions";
import * as PublicacionesActions from "../../Actions/PublicacionesActions";

const { TraerTodos: UsuariosTraerTodos } = UsuariosActions;
const { TraerPorUsuario: PublicacionesTraerPorUsuario } = PublicacionesActions;

class Publicaciones extends Component {
  async componentDidMount() {
    const {
      UsuariosTraerTodos,
      PublicacionesTraerPorUsuario,
      match: {
        params: { key }
      },
      UsuariosReducer: { usuarios }
    } = this.props;

    if (!usuarios.length) {
      await UsuariosTraerTodos();
    }

    if (!("publicaciones_key" in usuarios[this.props.match.params.key])) {
      PublicacionesTraerPorUsuario(key);
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Publicaciones de </h1>
        {this.props.match.params.key}
      </div>
    );
  }
}

const mapStateToProps = ({ UsuariosReducer, PublicacionesReducer }) => {
  return {
    UsuariosReducer,
    PublicacionesReducer
  };
};

const mapDispatchToProps = {
  UsuariosTraerTodos,
  PublicacionesTraerPorUsuario
};

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);
