import React from 'react';
import Title from './Title';
import missoes from '../data/missions';
import MissionCard from './MissionCard';

// Missions vai renderizar o Title e o MissionCard (esse que deve renderizar o name, year, country, destination).
class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missoes
          .map((missao) => (<MissionCard
            name={ missao.name }
            year={ missao.year }
            destination={ missao.destination }
            country={ missao.country }
            key={ missao.name }
          />))}
      </div>
    );
  }
}

export default Missions;
