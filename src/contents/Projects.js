import React from 'react';
import Card from '../components/Card';
import twitter from '../img/Twitterclone.png';
import likedislike from '../img/like-dislike.png';
import upskill from '../img/upskill.png';
function Projects() {
  return (
    <div className="project-container">
      <h1 className="project-header">My Projects</h1>
      <div className="project-div">
        <Card
          title="Twitter clone"
          img={twitter}
          link="https://twt-react-app.web.app"
        />
        <Card
          title="Like/Dislike"
          img={likedislike}
          link="https://like-dislike-av.web.app"
        />
        <Card
          title="Upskill-fund"
          img={upskill}
          link="https://upskill-fund.github.io/upskillfund.org/"
        />
      </div>
    </div>
  );
}

export default Projects;
