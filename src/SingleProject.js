import React, { Component } from 'react';

// import { Link } from 'react-router-dom'


class SingleProject extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Project Name!!'
    }
  }

  render() {
    let pj = this.props.project

    let imgside = 'left'
    let textside = 'right'

    if (this.props.side === 'right') {
      imgside = 'right'
      textside = 'left'
    }

    //////////////

    let imgside = 'left'
    let textside = 'right'

    if (this.props.side === 'right') {
      imgside = 'right'
      textside = 'left'
    }



    return (
      <div className='clear project'>
        {/* <center> */}
        <div className={`${textside}`}>
          <h3>
            {pj.name}
          </h3>
          <div>
            <p className='backgroundHighlight'>{pj.tags}</p>
          </div>
          <div className='desc'>
            <p>{pj.full_desc}</p>
          </div>
          <div>
            {pj.technologies}
          </div>
        </div>
        <div className={`${imgside} img_container projectImage`}
          style={{ backgroundImage: `url(${pj.full_media})` }}>
        </div>


      </div>
    );
  }
}

export default SingleProject;
