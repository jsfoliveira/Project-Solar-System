import React from 'react';
import Title from './Title';
import planetas from '../data/planets';
import PlanetCard from './PlanetCard';
import '../App.css';

// O SolarSystem é a seção que vai conter o Title e o PlanetCard (que é um grupo de seções contendo o título e a imagem dos planetas).
class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="sistema-solar">
          {planetas
            .map((planeta) => (<PlanetCard
              planetName={ planeta.name }
              planetImage={ planeta.image }
              key={ planeta.name }
            />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
