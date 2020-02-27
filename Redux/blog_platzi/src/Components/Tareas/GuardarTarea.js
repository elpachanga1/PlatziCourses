import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import * as TareasActions from "../../Actions/TareasActions";

import Error from "../General/Error";
import Spinner from "../General/Spinner";

class Guardar extends Component {
  componentDidMount() {
    const {
      match: {
        params: { usu_id, tar_id }
      },
      tareas,
      CambioUsuarioID,
      CambioTitulo,
      LimpiarForma
    } = this.props;

    if (usu_id && tar_id) {
      const tarea = tareas[usu_id][tar_id];
      CambioUsuarioID(tarea.userId);
      CambioTitulo(tarea.title);
    } else {
      LimpiarForma();
    }
  }

  CambioUsuarioID = event => {
    this.props.CambioUsuarioID(event.target.value);
  };

  CambioTitulo = event => {
    this.props.CambioTitulo(event.target.value);
  };

  guardar = () => {
    const {
      match: {
        params: { usu_id, tar_id }
      },
      tareas,
      usuario_id,
      titulo,
      AgregarTarea,
      EditarTarea
    } = this.props;

    const NuevaTarea = {
      userId: usuario_id,
      title: titulo,
      completed: false
    };

    if (usu_id && tar_id) {
      const tarea = tareas[usu_id][tar_id];

      const TareaEditada = {
        ...NuevaTarea,
        completed: tarea.completed,
        id: tarea.id
      };
      EditarTarea(TareaEditada);
    } else {
      AgregarTarea(NuevaTarea);
    }
  };

  deshabilitar = () => {
    const { usuario_id, titulo, cargando } = this.props;

    if (cargando) return true;
    if (!usuario_id || !titulo) {
      return true;
    }
    return false;
  };

  mostrarAccion = () => {
    const { error, cargando } = this.props;

    if (cargando) return <Spinner />;
    if (error) return <Error mensaje={error} />;
  };

  render() {
    return (
      <div>
        {this.props.regresar ? <Redirect to="/tareas" /> : ""}
        <h1>Guardar Tarea</h1>
        Usuario ID:{" "}
        <input
          type="number"
          value={this.props.usuario_id}
          onChange={this.CambioUsuarioID}
        />
        <br />
        <br />
        Titulo: <input value={this.props.titulo} onChange={this.CambioTitulo} />
        <br />
        <br />
        <button onClick={this.guardar} disabled={this.deshabilitar()}>
          Guardar
        </button>
        {this.mostrarAccion()}
      </div>
    );
  }
}

const mapStateToProps = ({ TareasReducer }) => TareasReducer;

export default connect(mapStateToProps, TareasActions)(Guardar);
