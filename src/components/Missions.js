import React from 'react';
import Title from './Title';
import missoes from '../data/missions';
import MissionCard from './MissionCard';
import '../App.css';

// Missions vai renderizar o Title e o MissionCard (esse que deve renderizar o name, year, country, destination).
class Missions extends React.Component {
  render() {
    return (
      <>
        <Title headline="Missões" />
        <div className="container">
          <div
            data-testid="missions"
            className="container-missions"
          >
            {missoes
              .map((missao) => (<MissionCard
                name={ missao.name }
                year={ missao.year }
                destination={ missao.destination }
                country={ missao.country }
                key={ missao.name }
              />))}
          </div>
        </div>
      </>
    );
  }
}

export default Missions;
