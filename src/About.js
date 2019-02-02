import React, { Component } from 'react';
import ScrollableAnchor from "react-scrollable-anchor";

class About extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (

      <div className='about'>
        <ScrollableAnchor id={'about'}>
        <center className=''>
          <h2>
            About
          </h2>
          <p>After working as a filmmaker for over a decade, I learned to code. Oddly enough, software tickles my engineering-analytical side, as well as my creative side.

          Projects that most interest me revolve around video or have interactive elements.

          I live in Bozeman, Montana.
          </p>
        </center>
            </ScrollableAnchor>
      </div>

    );
  }
}

export default About;
