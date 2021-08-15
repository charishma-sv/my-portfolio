import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Education</h1>
        <Widecard
          title="Bachelors in computer Science and Engineering"
          where="JNTU"
          from="2008"
          to="2012"
        />
        <Widecard
          title="Front end Development Certification"
          where="CodeX Academy"
          from="Jan 2021"
          to="Jul 2021"
        />
      </div>
    );
  }
}
export default Education;
