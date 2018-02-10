import React, { Component } from 'react'
import Thumbnail from './Thumbnail'

import Grid from 'react-css-grid'

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      yes: 1,
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
  }


  render() {


    return (
      <div style={{ 'width': '100%' }}>

        <div className="workSidenav" style={{ 'width': '20%', 'float': 'left' }}>
          {this.state.works.map((obj, index) => <li>{obj.workTitle}</li>)}
        </div>

        <div className="App" style={{ 'overflow': 'hidden' }}>
          <Grid width={250} gap={10}>
            {this.state.works.map((obj, index) => <Thumbnail job={obj} key={index} />)}
          </Grid>
        </div>

      </div>
    );
  }
}

export default Work;
