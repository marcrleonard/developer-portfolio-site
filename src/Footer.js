import React, { Component } from 'react';

class Footer extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className='clear'>
        <ul className='backgroundHighlight nav whiteText'>
          <li>
            <a rel="nofollow" href="javascript:decryptEmail('bWFyYy5yLmxlb25hcmRAZ21haWwuY29t');">
              Email!
                </a>
          </li>
          <li>
            <a target='_blank' href='https://instagram.com/marcrleonard'>
              Instagram!
                </a>
          </li>
          <li>
            <a target='_blank' href='http://marcrleonard.com'>
              More great stuff!
                </a>
          </li>

        </ul>
        <p>Copyright (c) 2018 Marc Leonard - All rights reserved</p>
      </div>
    );
  }
}

export default Footer;
