import React, { Component } from "react";
import "./header.css";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <img src={logo} width={250} />
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="is-selected">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/videos" activeClassName="is-selected">
                Videos
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/contacto" activeClassName="is-selected">
                Contacto
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/v" activeClassName="is-selected">
                Redirect
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/perfil" activeClassName="is-selected">
                Perfil
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
