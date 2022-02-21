import React from 'react';
import Header from './components/Header';
import MissionCard from './components/MissionCard';
import Missions from './components/Missions';
import PlanetCard from './components/PlanetCard';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Title />
        <PlanetCard />
        <Missions />
        <MissionCard />
      </>

    );
  }
}

export default App;
