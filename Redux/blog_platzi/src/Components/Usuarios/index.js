import React, { Component } from "react";
import { connect } from "react-redux"; //esto conecta el componente con redux
import * as UsuariosActions from "../../Actions/UsuariosActions";
import Spinner from "../General/Spinner";
import Error from "../General/Error";
import Tabla from "./Tabla";

class Usuarios extends Component {
  componentDidMount() {
    if (!this.props.usuarios.length) {
      this.props.TraerTodos();
    }
  }

  //https://loading.io/css
  //una pagina para descargar iconos de CSS para tu aplicacion
  ponerContenido = () => {
    if (this.props.cargando) {
      return <Spinner />;
    }

    if (this.props.error) {
      return <Error mensaje={this.props.error} />;
    }

    return <Tabla />;
  };

  render() {
    return (
      <div>
        <h1 className="center">Usuarios</h1>
        {this.ponerContenido()}
      </div>
    );
  }
}

const mapStateToProps = reducers => {
  return reducers.UsuariosReducer;
};

export default connect(mapStateToProps, UsuariosActions)(Usuarios);
