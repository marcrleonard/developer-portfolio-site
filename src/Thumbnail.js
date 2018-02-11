import React, { Component } from 'react'
require('./styles.css')

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll : false,
    }
  }

  descReturn() {
    // this logic is wonky...
    console.log(this.props)
    if (this.props.width != '100%') {
      return this.props.job.brief
    }
    return <div>
      {this.props.job.text}
      <br/>
      {this.props.job.tags}
      <br/>
      {this.props.job.year}
      </div>
  }

  render() {
    return (
      <div className="workThumb">
          {this.props.job.workTitle}
          <br/>
          {this.descReturn()}
      </div>
    );
  }
}

export default Thumbnail;
