import React from "react";

function Card(props) {
  return (
    <div className="cardBox">
      <div className="cardImg"></div>
      <div className="cardContent">
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
        <button type="button">Add To Cart</button>
      </div>
    </div>
  );
}

export default Card;
