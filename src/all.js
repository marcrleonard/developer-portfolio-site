
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import About from './About'
import Work from './Work'
import Contact from './Contact'

const fetch = require('node-fetch')


class Data extends Component {
    constructor(props) {
        super(props);

        this.state = {
            be_resp : '',
            yes: 1,
            show_page : <About/>
        }

        this.get_data()

        this.handle_click = this.change.bind(this)
        this.show_work = this.show_work.bind(this)
        this.show_about = this.show_about.bind(this)
        this.show_contact = this.show_contact.bind(this)
        
      }

      show_work() {
        this.setState({
          show_page: <Work/>
        })
      }

      show_about() {
        this.setState({
          show_page: <About/>
        })
      }

      show_contact() {
        this.setState({
          show_page: <Contact/>
        })

      }

        change() {
          this.new_val = this.state.yes + 1
        this.setState({
            yes: this.new_val
        })
        }
        get_data () {
            // let data = fetch('/hello')
            //             .then((response_json) => response_json.json())
            //             .then(response_json => {
            //                 console.log(response_json)
            //                 this.setState({
            //                     be_resp: response_json.key_name
            //                 })
            //             })
            let data = null
            console.log(data)
        return data
    
    }

    render() {

      return (

        <div className="App">
          <header className="App-header">
            <h1 className="App-title">{this.work}</h1>
          </header>
          <nav>
            <div className="navBar">
              <ul id="" className="navBar ul">
                {/* <li><a onClick={() => {this.setState({show_page: <About/>})}} href="#">About</a></li>
                <li><a onClick={() => {this.setState({show_page: <Work/>})}} href="#">Work</a></li>
                <li><a onClick={() => {this.setState({show_page: <Contact/>})}} href="#">Contact</a></li> */}
                <li className="navBar li" ><Link to="/">About</Link></li>
                <li className="navBar li" ><Link to="/Work">Work</Link></li>
                <li className="navBar li" ><Link to="/Contact">Contact</Link></li>
              </ul>
            </div>
          </nav>
          <br/>
          <div> 
              {this.state.yes}
          </div>

          <Route exact path="/" component={About}/>
          <Route path="/Work" component={Work}/>
          <Route path="/Contact" component={Contact}/>

          <button onClick={this.handle_click} > Click me! </button>
        </div>
      );
    }
  }
  export default Data;