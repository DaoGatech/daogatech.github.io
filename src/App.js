import React, { Component } from 'react';
import logo from './profile.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <a className="navigation">About</a>
        </div>
        <p className="App-intro">
          <img className="w3-animate-top profilePic" src={logo}/>
          <div className="about">
            <p>Hello. My name is <strong>Stephen Dao</strong>. I'm currently a software engineer at <a style={{color:'#175ed1'}} href="https://www.homeaway.com/"><strong>HomeAway Inc</strong></a> (part of <a style={{color:'#175ed1'}} href="https://www.expedia.com"><strong>Expedia Inc</strong></a>). Previously, I was at <a href="https://www.argonjs.io/" style={{color:'#F1C40F'}}><strong>Georgia Tech's Augmented Environments Lab</strong></a> and <a href="http://www.sungevity.com/" style={{color:'#E67E22'}}><strong>Sungevity</strong></a></p>
            <p>I'm a recent graduate of <strong style={{color:'#F1C40F'}}>Georgia Tech</strong>. I currently live in <strike>Saigon, VN</strike> <strike>Atlanta, GA</strike> <strong>Austin, TX.</strong></p>
          </div>
          <div className="social">
            <a href="https://github.com/DaoGatech"><i className="fa fa-github fa-lg"></i></a>
            <a href="https://www.linkedin.com/in/daogatech/"><i className="fa fa-linkedin fa-lg"></i></a>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
