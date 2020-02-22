import React from 'react';
import './style.scss';

const Header = () => {
  return (
    <header className="header">
      <button>Users</button>
      <button>Albums</button>
      <button>Photos</button>
    </header>
  );
}

export default Header;