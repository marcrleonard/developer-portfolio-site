
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Grid from 'react-css-grid'
import MediaQuery from 'react-responsive'

import About from './About'
import Work from './Work'
import Contact from './Contact'

const fetch = require('node-fetch')

const menuItems = [
  'Work',
  'About',
  'Contact'
]


class Data extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: '1',
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
      yes: this.new_val,
      grid: '50%'
    })
  }

  setActive(incoming) {
    console.log(incoming)
    // console.log(incoming.id)
    this.setState({ color_black: !this.state.color_black })
  }

  render() {

    return (

      <div className="app-page">
        <header className="header">

          <Grid width={this.state.grid} gap={0}>
            <div className='leftHeader line'>
              <center>
                <h1 className="title">Marc Leonard</h1>
                <h2 className="titleDesc">Creative and Full-stack Developer</h2>
              </center>
            </div>
            <div>
              <div className='descContain'>
                <a className='desc'>
                  Hey there.
                  I am a full stack developer, and creative coder. Not only do I
                  enjoy working on web applications, but I also keep myself sane
                  by making art with code. Below is a smattering of some of the
                  work I am proud of.
                </a>
              </div>
            </div>
          </Grid>


        </header>

        <br />

        <nav>
          <div className="navBar">
            <center>
              <ul id="" className="navBar ul">

                {/* Could be user error, but this isn't working.  */}
                {/* {menuItems.map((obj, index) => 
                  <li style={{'background': (this.state.activePage=={obj}) ? 'red':'white'}} className="navBar li" ><Link onClick={() => this.setState({'activePage':obj})} to={obj} >{obj}</Link></li>
                )} */}

                {/* <li className="navBar li" ><Link to="/Work">Work</Link></li>
                <li className="navBar li" ><Link to="/">About</Link></li> */}
                <li style={{ 'background': (this.state.activePage == '1') ? '#F5F5F5' : 'white' }} className="navBar li" ><Link onClick={() => this.setState({ 'activePage': '1' })} to="/">Work</Link></li>

                <li style={{ 'background': (this.state.activePage == '2') ? '#F5F5F5' : 'white' }} className="navBar li" ><Link onClick={() => this.setState({ 'activePage': '2' })} to="/About">About</Link></li>

                <li style={{ 'background': (this.state.activePage == '3') ? '#F5F5F5' : 'white' }} className="navBar li" ><Link onClick={() => this.setState({ 'activePage': '3' })} to="/Contact">Contact</Link></li>

              </ul>
            </center>
          </div>
        </nav>
        <div className='content'>
          <Route exact path="/" component={Work} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
        </div>


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