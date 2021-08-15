import React from 'react';

function Card(props) {
  return (
    <div className="card">
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className="card-container">
          <img alt="" src={props.img} />

          <h3>{props.title}</h3>

          {/* <a href={props.link} target="_blank" rel="noreferrer">
          <span>Go</span>
        </a> */}
        </div>
      </a>
    </div>
  );
}

export default Card;
