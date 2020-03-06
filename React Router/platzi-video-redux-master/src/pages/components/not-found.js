import React, { PureComponent } from "react";
import "./generic-page.css";

export default class NotFound extends PureComponent {
  handleForwardClick = () => {
    this.props.history.goForward();
  };

  handleBackClick = () => {
    this.props.history.goBack();
    //go es una funcion que te lleva hacia adelante o hacia atras
    //-1 = pagina atras
    //1 = pagina adelante
    //this.props.history.go();
  };

  handleRandomClick = () => {
    const random = Math.round(Math.random() * (10 - 1) + 1);
    this.props.history.push(`/videos?id=${random}`);
  };

  render() {
    return (
      <div className="Page">
        <h1>404</h1>
        <h3 className="SadFace">:(</h3>
        <h2>No hemos encontrado la pagina que buscabas</h2>

        <button className="Button" onClick={this.handleForwardClick}>
          Ir a la siguiente pagina
        </button>
        <button className="Button" onClick={this.handleBackClick}>
          Ir a la pagina anterior
        </button>
        <button className="Button" onClick={this.handleRandomClick}>
          Video Random
        </button>
      </div>
    );
  }
}
