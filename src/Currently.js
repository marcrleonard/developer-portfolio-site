import React, { Component } from 'react';
import SingleProject from './SingleProject.js'
import ScrollableAnchor from "react-scrollable-anchor";

class Currently extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {

    let curr = {
      'name': 'PixelStrings',
      'tags': 'PaaS',
      'short_desc': 'QD',
      // 'bg_img': '',
      'full_desc': <>Currently, I am a core backend developer of PixelStrings,
    a platform by {React.createElement('a', { href: 'https://cinnafilm.com' }, 'Cinnafilm')}. {<a className='projectLink' href="http://pixelstrings.com"> PixelStrings</a>} specializes
                cloud video processing and delivery.
                My job is two fold - automating the allocation and
                orchestration cloud compute resources for processing and
                delivery, and creating APIs to enable different type of video
                conversion formats. These services are accessed by the front
    end UI, as well as our public API.</>,
      'technologies': ['python'],
      'full_media': 'img/pxs_screenshot.jpg',
      'links': ['pixelstrings.com']
    }

    let side = 'left'


    return (
      <div className='currently'>
          <ScrollableAnchor id={'currently'}>
        <center>
          <h2>
            Currently
          </h2>
          <div>
            <SingleProject
              className='clear'
              key={curr.name.toString()}
              side={side}
              project={curr}
            />
          </div>
        </center>
          </ScrollableAnchor>
      </div>
    );
  }
}

export default Currently;


