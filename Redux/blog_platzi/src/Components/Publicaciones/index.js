import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../General/Spinner";
import Error from "../General/Error";
import Comentarios from "./Comentarios";

import * as UsuariosActions from "../../Actions/UsuariosActions";
import * as PublicacionesActions from "../../Actions/PublicacionesActions";

const { TraerTodos: UsuariosTraerTodos } = UsuariosActions;
const {
  TraerPorUsuario: PublicacionesTraerPorUsuario,
  AbrirCerrar,
  TraerComentarios
} = PublicacionesActions;

class Publicaciones extends Component {
  async componentDidMount() {
    const {
      UsuariosTraerTodos,
      PublicacionesTraerPorUsuario,
      match: {
        params: { key }
      }
    } = this.props;

    //aqui no se deestructura usuariosReducer porque este cambia en el render generado por componentDidMount
    if (!this.props.UsuariosReducer.usuarios.length) {
      await UsuariosTraerTodos();
    }

    //control de excepciones en la vista
    if (this.props.UsuariosReducer.error) return;

    if (!("publicaciones_key" in this.props.UsuariosReducer.usuarios[key])) {
      PublicacionesTraerPorUsuario(key);
    }
  }

  ponerUsuario = () => {
    //aqui si se puede deestructurar porque usuariosReducer se ejecuta en el render
    const {
      UsuariosReducer,
      match: {
        params: { key }
      }
    } = this.props;

    if (UsuariosReducer.error) {
      return <Error mensaje={UsuariosReducer.error} />;
    }

    if (!UsuariosReducer.usuarios.length || UsuariosReducer.cargando) {
      return <Spinner />;
    }

    return <h1>Publicaciones de {UsuariosReducer.usuarios[key].name}</h1>;
  };

  ponerPublicaciones = () => {
    const {
      UsuariosReducer,
      UsuariosReducer: { usuarios },
      PublicacionesReducer,
      PublicacionesReducer: { publicaciones },
      match: {
        params: { key }
      }
    } = this.props;

    if (!usuarios.length) return;
    if (!publicaciones.length) return;
    if (UsuariosReducer.error) return;

    if (PublicacionesReducer.cargando) {
      return <Spinner />;
    }

    if (PublicacionesReducer.error) {
      return <Error mensaje={PublicacionesReducer.error} />;
    }

    if (!("publicaciones_key" in usuarios[key])) return;

    const { publicaciones_key } = usuarios[key];

    return this.mostrarInfo(
      publicaciones[publicaciones_key],
      publicaciones_key
    );
  };

  mostrarInfo = (publicaciones, pub_key) =>
    publicaciones.map((publicacion, com_key) => (
      <div
        key={publicacion.id}
        className="pub_titulo"
        onClick={() =>
          this.mostrarComentarios(pub_key, com_key, publicacion.comentarios)
        }
      >
        <h2>{publicacion.title}</h2>
        <h3>{publicacion.body}</h3>

        {publicacion.abierto ? (
          <Comentarios comentarios={publicacion.comentarios} />
        ) : (
          ""
        )}
      </div>
    ));

  mostrarComentarios = (pub_key, com_key, comentarios) => {
    this.props.AbrirCerrar(pub_key, com_key);

    if (!comentarios.length) {
      this.props.TraerComentarios(pub_key, com_key);
    }
  };

  render() {
    console.log(this.props);
    return (
      <div>
        {this.ponerUsuario()}
        {this.ponerPublicaciones()}
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
  PublicacionesTraerPorUsuario,
  AbrirCerrar,
  TraerComentarios
};

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);
