import React, { Component } from 'react';

import { Link } from 'react-router-dom'


class SingleProject extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Project Name!!'
    }
  }

  render() {
    let pj = this.props.project







    let innerProject = []

    let text = <div className='projectHalf'>
      <h3>
        {pj.name}
      </h3>
      <div>
        <p className='backgroundHighlight thickWeight'>
          {pj.tags}
        </p>
      </div>
      <div className='desc'>
        <p>{pj.full_desc}</p>
      </div>
      <div className='projectLink'>
        <a href={`https://${pj.links}`} >
          {pj.links}
        </a>
      </div>
    </div>

    let image = <div className={`projectHalf img_container projectImage`}
      style={{ backgroundImage: `url(${pj.full_media})` }}>
    </div>

    if (this.props.side === 'right') {
      innerProject.push(text)
      innerProject.push(image)
    }

    if (this.props.side === 'left') {
      innerProject.push(image)
      innerProject.push(text)

    }


    return (
      <div className={`${this.props.side} clear project`}>

        {innerProject}


      </div>
    );
  }
}

export default SingleProject;
