import React, { Component } from 'react';

class Menu extends Component {
  constructor() {
    super()
    this.state = {}

    this.window = ''
    this.y = ''



  }



  componentDidMount() {
    this.window = window
    // d = document,
    // documentElement = d.documentElement,
    // body = d.getElementsByTagName('body')[0],
    // width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
    // height = w.innerHeight || documentElement.clientHeight || body.clientHeight



    let getScroll = function () {

      if (window.pageYOffset != undefined) {
        return [window.pageXOffset, window.pageYOffset]
      } else {
        var sx; var sy; var d = document;


        var r = d.documentElement;


        var b = d.body
        sx = r.scrollLeft || b.scrollLeft || 0
        sy = r.scrollTop || b.scrollTop || 0

        this.y = sy

        return { 'x': sx, 'y': sy }
      }
    };



    var window_offset = 0;
    var nav = document.getElementById('nav_bar');
    var elemRect = nav.offsetTop;

    // might not need the this.
    this.window.addEventListener('scroll', function (e) {
      var blah = getScroll()

      window_offset = blah[1]
      console.log('Absolute: ', window_offset)


      console.log(elemRect);

      var top = this.document.getElementById('nav_bar');

      if (elemRect < window_offset) {
        nav.classList.add("sticky");
        top.style.height = '50px'
      }
      else {
        // if ((nav.classList).includes('sticky')) {
        nav.classList.remove("sticky");
        top.style.height = '0px'
      };


    })



  }

  render() {






    return (
      <div>
        <nav id="nav_bar">
          <ul className="nav backgroundNav">
            <li><a href="#about" className="active">About</a></li>
            <li><a href="#currently">Currently</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
