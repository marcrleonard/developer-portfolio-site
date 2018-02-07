
import React, { Component } from 'react'

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
            let data = fetch('/hello')
                        .then((response_json) => response_json.json())
                        .then(response_json => {
                            console.log(response_json)
                            this.setState({
                                be_resp: response_json.key_name
                            })
                        })
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
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">ML</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a onClick={this.show_about} href="#">About</a></li>
                <li><a onClick={this.show_work} href="#">Work</a></li>
                <li><a onClick={this.show_contact} href="#">Contact</a></li>
              </ul>
            </div>
          </nav>
          <div> 
              {this.state.yes}
          </div>

          {this.state.show_page}

          <button onClick={this.handle_click} > Click me! </button>
        </div>
      );
    }
  }
  export default Data;