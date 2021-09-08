import React, { Component } from 'react';
import Social from '../components/Social';
class Contact extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Contact Me</h1>
        <h3>
          Email :
          <a href="mailto:itscharishma@gmail.com">itscharishma@gmail.com</a>
        </h3>
        <h3>
          Linkedin :
          <a href="https://www.linkedin.com/in/charishma-somisetty/">
            charishma-somisetty
          </a>
        </h3>
        <h3>
          Github :<a href="https://github.com/charishma-sv">charishma-sv</a>
        </h3>
        <Social />
      </div>
    );
  }
}
export default Contact;
