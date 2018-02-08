import React, { Component } from 'react'
import Thumbnail from './Thumbnail'

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
        yes: 1,
        works : [
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
      ]
    }


    
  }

  render() {
    return (
      <div className="App">
        <p className="App">
          This is the Work page.
        </p>

        {this.state.works.map((obj, index) => <Thumbnail job={obj} key={index} />)}

      </div>
    );
  }
}

export default Work;
