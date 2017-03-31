import React, { Component } from 'react';
import { TimelineMax, Linear } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'animation.gsap';
import Menu from './Components/Menu';
import Main from './Components/Main';
import Projects from './Components/Projects';
import About from './Components/About';
import './material.css';
import 'react-mdl/extra/material.js';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.setScroll2();
  }
  setScroll() {
    let controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave'
      }
    });
    const slides = document.querySelectorAll('div.panel');
    slides.forEach((slide) => {
      new ScrollMagic.Scene({
        triggerElement: slide
      })
      .setPin(slide)
      .addTo(controller);
    });
  }
  setScroll2() {
    // init
		var controller = new ScrollMagic.Controller();

		// define movement of panels
		var wipeAnimation = new TimelineMax()
			// .fromTo("div.panel.main-component.row", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
			.fromTo("div.panel.projects-component.row",    1, {y:  "100%"}, {y: "0%", ease: Linear.easeNone})  // in from right
			.fromTo("div.panel.about-component.row", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: "onLeave",
				duration: "300%"
			})
			.setPin("#pinContainer")
			.setTween(wipeAnimation)
			.addTo(controller);
  }
  render() {
    return (
      <div className="App">
        <div id="pinContainer" className="main">
          <Menu />
          <Main />
          <Projects />
          <About />
        </div>
      </div>
    );
  }
}

export default App;
