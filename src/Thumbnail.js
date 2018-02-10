import React, { Component } from 'react'
require('./styles.css')

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    // this is wrong... 
    // console.log(this.props)
    // console.log(this.props.job.workTitle)
    // console.log(this.props.job.brief)
    
  }

  render() {
    return (
      <div className="workThumb">
          {this.props.job.workTitle}
          <br/>
          {this.props.job.brief}
          <br/>    
      </div>
      
    );
  }
}

export default Thumbnail;
