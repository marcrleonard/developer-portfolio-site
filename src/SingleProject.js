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



    let imgside = 'leftImg'
    let textside = 'rightText'

    if (this.props.side === 'right') {
      textside = 'leftText'
      imgside = 'rightImg'
    }



    return (
      <div className='clear project'>
        {/* <center> */}
        <div className={`${textside}`}>
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
        <div className={`${imgside} img_container projectImage`}
          style={{ backgroundImage: `url(${pj.full_media})` }}>
        </div>


      </div>
    );
  }
}

export default SingleProject;
