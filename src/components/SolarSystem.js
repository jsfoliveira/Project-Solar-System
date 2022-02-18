import React from 'react';
import Title from './Title';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Sistema Solar</h1>
        <Title headline="Planetas" />
      </header>
    );
  }
}

export default Header;
