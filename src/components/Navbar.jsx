import React from 'react';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav>
      <div />
      <div className="p-2">
        <span>
          <i className="fa-solid fa-microphone-lines" />
        </span>
        <span>
          <i className="fa-solid fa-gear" />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
