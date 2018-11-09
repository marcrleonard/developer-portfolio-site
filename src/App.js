import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Menu from './Menu.js'
import About from './About.js'
import Currently from './Currently.js'
import Projects from './Projects.js'
import Footer from './Footer.js'

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <div className='container'>
          <Header></Header>
        </div>
        <Menu></Menu>
        <div className='container' >
          <About name='about'></About>

          <Currently name='currently'></Currently>
          <Projects></Projects>
          <Footer></Footer>
        </div>

      </div>

    );
  }
}

export default App;
