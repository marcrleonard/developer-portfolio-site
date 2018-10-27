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
        <Header></Header>
        <Menu></Menu>
        <About></About>
        <Currently></Currently>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
