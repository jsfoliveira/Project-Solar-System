import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

// O MissionCard tem uma div que vai receber o atributo data-testid="mission-card". Vai receber também as props: name, year, country, destination. Essas props serão renderizados na tag <p>. Para usar as props, precisa validá-las.
class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <h5>Planeta</h5>
        <p data-testid="mission-name">
          { name }
        </p>
        <h5>Idade</h5>
        <p data-testid="mission-year">
          { year }
        </p>
        <h5>País</h5>
        <p data-testid="mission-country">
          { country }
        </p>
        <h5>Destino</h5>
        <p data-testid="mission-destination">
          { destination }
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
