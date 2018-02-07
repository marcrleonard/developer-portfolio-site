import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <div className="nav-wrapper">
              <a href="#" className="brand-logo">ML</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a onClick={this.show_about} href="#">About</a></li>
                <li><a onClick={this.show_work} href="#">Work</a></li>
                <li><a onClick={this.show_contact} href="#">Contact</a></li>
              </ul>
            </div>
    );
  }
}

export default Nav;
