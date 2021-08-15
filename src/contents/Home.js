import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social';
import profilepic from '../img/PhotoFunia-1.jpg';
class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img alt="" src={profilepic} className="profilepic"></img>
        <ReactTypingEffect
          className="typingeffect"
          text={['I am Charishma Somisetty', 'Enthusiastic Web developer']}
          speed={100}
          eraseDelay={2000}
          eraseSpeed={100}
          typingDelay={500}
        />
        <Social />
      </div>
    );
  }
}
export default Home;
