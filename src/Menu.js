import React, { Component } from 'react';

class Menu extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <nav id="nav_bar">
          <ul className="nav backgroundNav">
            <li><a href="#about" className="active">About</a></li>
            <li><a href="#currently">Currently</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
