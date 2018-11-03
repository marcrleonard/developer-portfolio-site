import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="fullHeight">
        <center className='center_vert'>
          <div className="backgroundHighlight">
            <h1>
              Marc Leonard
                </h1>
          </div>

          <div className='subHeading'>
            full stack developer
            <div>
              +
            </div>
            likes art
          </div>
        </center>
      </div>
    );
  }
}

export default Header;
