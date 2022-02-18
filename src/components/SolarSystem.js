import React from 'react';
import Title from './Title';
import planetas from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div>
        <Title headline="Planetas" />
        {planetas
          .map((planeta) => (<PlanetCard
            planetName={ planeta.name }
            planetImage={ planeta.image }
            key={ planeta.name }
          />))}
      </div>
    );
  }
}

export default SolarSystem;
