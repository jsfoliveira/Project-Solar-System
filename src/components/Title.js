import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

// O componente Title deve receber uma prop headline, que deve ser renderizado no h2.
// Eu usei Title duas vezes: no SolarSystem (headline="Planetas") e no Missions (headline="Missões")
class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <p className='linha'>
        <h2>
          { headline }
        </h2>
      </p>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
