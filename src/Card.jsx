import React from 'react';

function Card(props) {
  return (
    <div className="card">
      <img src={props.imgsrc} alt="series-img" className="cardimg" />
      <div className="info">
        <span>{props.title}</span>
        <h3>{props.name}</h3>
        <a href={props.reference} target="_blank" rel="noopener noreferrer">
          <button className="btn">Watch Now</button>
        </a>
      </div>
    </div>
  );
}

export default Card;
