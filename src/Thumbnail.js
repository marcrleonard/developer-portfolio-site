import React, { Component } from 'react'
require('./styles.css')
// require('./riding.png')

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll : false,

    }
  }

  descReturn() {
    // this logic is wonky...

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
    console.log(process.env.PUBLIC_URL + '/' + this.props.job.thumb)

    console.log(this.props.fullJob)

    let img_size = '100%'
    if (this.props.fullJob) {
      img_size = '300px';
    }

    return (
      <div className="workThumb">
          <img src={process.env.PUBLIC_URL + '/' + this.props.job.thumb} width={img_size} alt={this.props.job.thumb}></img>
          <br/>
          {this.descReturn()}
      </div>
    );
  }
}

export default Thumbnail;
