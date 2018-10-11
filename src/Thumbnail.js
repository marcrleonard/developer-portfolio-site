import React, { Component } from 'react'
require('./styles.css')
// require('./riding.png')

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: this.props.fullJob,
      thumb: this.props.job.thumb

    }
  }


  // workTitle: '4',
  // thumb: 'verge.jpg',
  // brief: 'short!!!!',
  // text: 'This is a super long text.!!!!..',
  // otherMedia: [],
  // year: 2018,
  // tags: ['video', 'design']

  descReturn() {

    if (this.props.width !== '100%') {
      return <div>
        <center>
        <item className='fullJobTitle'> {this.props.job.workTitle} </item>
        <br />
        <div className='jobText'> {this.props.job.brief} </div>
        </center>
      </div>
    }
    return <div>
      <center>
        <item className='fullJobTitle'> {this.props.job.workTitle} </item>
        <div className='jobText'>
        <br />
        {this.props.job.text}
        <br />
        {this.props.job.tags}
        <br />
        <div className='tagBox' ><a>{this.props.job.year}</a></div>
        </div>
      </center>
    </div>
  }

  render() {

    let img_size = '100%'
    if (this.props.fullJob) {
      img_size = '500px';
    }

    return (
      <div>
        <div style={{ 'height': '100%' }} className="workThumb">
          <center>
            <img src={process.env.PUBLIC_URL + '/' + this.state.thumb} width={img_size} alt={this.state.thumb}></img>
          </center>
          <br />
        </div>
        <div>
          {this.descReturn()}
        </div>
      </div>
    );
  }
}

export default Thumbnail;
