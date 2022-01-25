import React from "react";
import PropTypes from 'prop-types';
import ComponenteB from './pure/componente-b';

class ComponenteA extends React.Component {

  render() {
    return (
      <div>
            <h2> Estado del contacto</h2>
            <h2>Nombre: { this.props.nombre }</h2>
            <h2>Apellido: {this.props.apellido}</h2>
            <h2>Email: {this.props.email}</h2>
            <ComponenteB props={ this.props.conectado }></ComponenteB>

        </div>)
  }
}

ComponenteA.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    email: PropTypes.string,
    conectado: PropTypes.bool
}

export default ComponenteA;