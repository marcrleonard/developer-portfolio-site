
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Grid from 'react-css-grid'

import About from './About'
import Work from './Work'
import Contact from './Contact'

const fetch = require('node-fetch')


class Data extends Component {
  constructor(props) {
    super(props);

    this.state = {
      be_resp: '',
      yes: 1,
      show_page: <About />,
      headerStacked: '50%'
    }

    this.handle_click = this.change.bind(this)

  }

  show_work() {
    this.setState({
      show_page: <Work />
    })
  }

  show_about() {
    this.setState({
      show_page: <About />
    })
  }

  show_contact() {
    this.setState({
      show_page: <Contact />
    })

  }

  change() {
    this.new_val = this.state.yes + 1
    this.setState({
      yes: this.new_val
    })
  }

  render() {

    return (

      <div className="app-page">
        <header className="header">
          <Grid width={this.state.headerStacked} gap={0}>
            <div><h1 className="title">Marc Leonard.</h1></div>
            <div className='desc'>this is a div.</div>
          </Grid>
        </header>
        <nav>
          <div className="navBar">
            <ul id="" className="navBar ul">
              <li className="navBar li" ><Link to="/Work">Work</Link></li>
              <li className="navBar li" ><Link to="/">About</Link></li>
              <li className="navBar li" ><Link to="/Contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
        <br />

        <Route exact path="/" component={About} />
        <Route path="/Work" component={Work} />
        <Route path="/Contact" component={Contact} />

        <footer>
          <div>
            {this.state.yes}
          </div>
          <button onClick={this.handle_click} > Click me! </button>
        </footer>
      </div>
    );
  }
}
export default Data;