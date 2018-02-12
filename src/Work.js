import React, { Component } from 'react'
import Thumbnail from './Thumbnail'

import Grid from 'react-css-grid'
import { HashRouter } from 'react-router-dom'



class Work extends Component {

  constructor(props) {
    super(props);

    this.state = {
      yes: 1,
      thumbWidth: 250,
      fullJob: false,
      works: [
        {
          workTitle: 'LLBean',
          thumb: './riding.png',
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
  }

  render() {
    return (
      <div className='workMain'>
        <Grid width={this.state.thumbWidth} gap={0}>
          {this.state.works.map((obj, index) =>
            <div key={index} onClick={this.changeWidth} >
              <Thumbnail width={this.state.thumbWidth} job={obj} fullJob={this.state.fullJob} key={index} />
            </div>
          )}
        </Grid>
      </div>
    );
  }
}

// 410-252-1573

export default Work;
