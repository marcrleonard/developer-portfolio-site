import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="page_content">
        <center>
          <div className="backgroundHighlight">
            <h1>
              Marc Leonard
                </h1>
          </div>
          <h2>
            full stack developer + likes art
          </h2>
        </center>
      </div>
    );
  }
}

export default Header;
