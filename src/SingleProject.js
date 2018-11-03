

import React, { Component } from 'react';


// const VisibilitySensor = require('react-visibility-sensor');
import VisibilitySensor from 'react-visibility-sensor';





class SingleProject extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Project Name!!',
      animationClass: 'asd',
      imageSide: ''
    }

  }

  onChange = (isVisible) => {

    if (isVisible) {
      console.log(`Element is now ${isVisible ? 'visible' : 'hidden'}`);

      if (this.props.side === "right") {
        this.setState({ animationClass: 'slideLeft' })
      }
      if (this.props.side === "left") {
        this.setState({ animationClass: 'slideRight' })
      }

    }
    else {
      console.log(`Element is now ${isVisible ? 'visible' : 'hidden'}`);
      if (this.props.side === "right") {
        this.setState({ animationClass: 'slideLeftReverse' })
      }
      if (this.props.side === "left") {
        this.setState({ animationClass: 'slideRightReverse' })
      }
    };

  }

  componentDidMount() {
    if (this.props.side === 'right') {
      this.setState({ imageSide: 'rightImage' })
    }

    if (this.props.side === 'left') {
      this.setState({ imageSide: 'leftImage' })
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

    let image = <div className={`projectHalf img_container projectImage ${this.state.animationClass} ${this.state.imageSide}`}
      style={{ backgroundImage: `url(${pj.full_media})` }}>
    </div>

    if (this.props.side === 'right') {
      innerProject.push(text)
      innerProject.push(image)
      // this.setState({ imageSide: 'rightImage' })
    }

    if (this.props.side === 'left') {
      innerProject.push(image)
      innerProject.push(text)
      // this.setState({ imageSide: 'leftImage' })

    }



    return (
      <VisibilitySensor
        onChange={this.onChange}
        partialVisibility={true}
        offset={{ bottom: 200 }}
      >
        <div className={`${this.props.side} clear`}>

          {innerProject}


        </div >

      </VisibilitySensor >

    );
  }
}

export default SingleProject;
