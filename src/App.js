import React, { Component } from 'react'
import './App.css'
var axios = require('axios')

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started... edit <code>src/App.js</code> and save to reload. Duh
        </p>
      </div>
    );
  }
}

export default App;

function getHello(){
  return axios.get('/hello');
}


var helpers = {
  getGithubInfo: function(){
    return axios.all([getHello()])
      .then(function(arr){
        console.log(arr)
        return {
          resp: arr
        }
      })
  }
}

export default helpers;