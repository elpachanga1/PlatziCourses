import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as TareasActions from "../../Actions/TareasActions";

import Spinner from "../General/Spinner";
import Error from "../General/Error";

class Tareas extends Component {
  componentDidMount() {
    if (!Object.keys(this.props.tareas).length) {
      this.props.TraerTareas();
    }
  }

  componentDidUpdate() {
    const { tareas, cargando, TraerTareas } = this.props;

    //filtro para que no me ejecute actualizacion 2 veces, una por el render y una por el eliminado
    if (!Object.keys(tareas).length && !cargando) {
      TraerTareas();
      //console.log(this.props);
    }
  }

  mostrarContenido = () => {
    const { tareas, cargando, error } = this.props;

    if (cargando) return <Spinner />;
    if (error) return <Error mensaje={error} />;

    return Object.keys(tareas).map(usuario_id => (
      <div key={usuario_id}>
        <h2>Usuario {usuario_id}</h2>
        <div className="contenedor_tareas">{this.ponerTareas(usuario_id)}</div>
      </div>
    ));
  };

  ponerTareas = usuario_id => {
    const { tareas, CambioCheck, Eliminar } = this.props;
    const por_usuario = {
      ...tareas[usuario_id]
    };

    return Object.keys(por_usuario).map(tarea_id => (
      <div key={tarea_id}>
        <input
          type="checkbox"
          defaultChecked={por_usuario[tarea_id].completed}
          onChange={() => CambioCheck(usuario_id, tarea_id)}
        />
        {por_usuario[tarea_id].title}
        <button className="m_left">
          <Link to={`/tareas/guardar/${usuario_id}/${tarea_id}`}>Editar</Link>
        </button>
        <button className="m_left" onClick={() => Eliminar(tarea_id)}>
          Eliminar
        </button>
      </div>
    ));
  };

  render() {
    //console.log(this.props);
    return (
      <div>
        <button>
          <Link to="/tareas/guardar">Guardar Tarea</Link>
        </button>
        {this.mostrarContenido()}
      </div>
    );
  }
}

const mapStateToProps = ({ TareasReducer }) => TareasReducer;

export default connect(mapStateToProps, TareasActions)(Tareas);
