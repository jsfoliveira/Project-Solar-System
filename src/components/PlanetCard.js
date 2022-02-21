import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

// O PlanetCard recebe duas props: planetImage e planetName. A div e o p vem com seus atributos. Quando usa props, precisa validar eles.
class PlanetCard extends React.Component {
  render() {
    const { planetImage, planetName } = this.props;
    return (
      <div className="planeta-cards" data-testid="planet-card">
        <p className="nome-planeta" data-testid="planet-name">
          { planetName }
        </p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}
PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
