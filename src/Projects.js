import React, { Component } from 'react';
import ProjectContainer from './ProjectContainer';
import ScrollableAnchor from 'react-scrollable-anchor'

class Projects extends Component {
  constructor() {
    super()
    this.state = {}
  }



  render() {
    return (
         <ScrollableAnchor id={'projects'}>
      <div>

          <center>

            <h2>
              Projects
            </h2>
            <ProjectContainer />
          </center>

      </div>
            </ScrollableAnchor>
    );
  }
}

export default Projects;
