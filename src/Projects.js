import React, { Component } from 'react';
import ProjectContainer from './ProjectContainer';

class Projects extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <center>
          <h2>
            Projects
          </h2>
          <ProjectContainer />
        </center>

      </div>
    );
  }
}

export default Projects;
