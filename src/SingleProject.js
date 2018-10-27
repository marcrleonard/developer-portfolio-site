import React, { Component } from 'react';

class SingleProject extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Project Name!!'
    }
  }

  render() {
    return (
      <div>
        <center>
          <h3>
            {this.props.project.name}
          </h3>
        </center>

      </div>
    );
  }
}

export default SingleProject;
