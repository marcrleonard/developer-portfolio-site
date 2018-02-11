import React, { Component } from 'react'
import Thumbnail from './Thumbnail'

import Grid from 'react-css-grid'


class Work extends Component {

  constructor(props) {
    super(props);

    this.state = {
      yes: 1,
      thumbWidth: 250,
      works: [
        {
          workTitle: 'LLBean',
          thumb: 'llbean.jpg',
          brief: 'short!',
          text: 'This is a super long text...',
          otherMedia: [],
          year: 2016,
          tags: ['design']
        },
        {
          workTitle: 'Verge',
          thumb: 'verge.jpg',
          brief: 'short!!!!',
          text: 'This is a super long text.!!!!..',
          otherMedia: [],
          year: 2018,
          tags: ['video', 'design']

        },
        {
          workTitle: '3',
          thumb: 'verge.jpg',
          brief: 'short!!!!',
          text: 'This is a super long text.!!!!..',
          otherMedia: [],
          year: 2018,
          tags: ['video', 'design']

        },
        {
          workTitle: '4',
          thumb: 'verge.jpg',
          brief: 'short!!!!',
          text: 'This is a super long text.!!!!..',
          otherMedia: [],
          year: 2018,
          tags: ['video', 'design']
        },
      ]
    }
    this.changeWidth = this.changeWidth.bind(this)
  }
  changeWidth() {
    this.setState({ thumbWidth: (this.state.thumbWidth === '100%') ? '250px' : '100%' })
    console.log('changed to: ' + this.state.thumbWidth)
  }

  render() {
    return (
      <div style={{ 'width': '100%', 'padding-top': '0px' }}>

        <div className="workSidenavcontaner" >
          {this.state.works.map((obj, index) => <div className='workSidenavItem' key={index} > <a >{obj.workTitle}</a><div className='line'></div></div>)}
          <div className='fadeDown' style={{ 'height': '100px' }}> </div>

        </div>

        <div className='workMain'>
          <Grid width={this.state.thumbWidth} gap={0}>
            {this.state.works.map((obj, index) => <div key={index} onClick={this.changeWidth} > <Thumbnail width={this.state.thumbWidth} job={obj} key={index} /> </div>)}
          </Grid>
        </div>
      </div>
    );
  }
}

export default Work;
