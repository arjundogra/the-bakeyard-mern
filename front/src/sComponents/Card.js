import React from "react";

function Card(props) {
  return (
    <div class="cardContainer">
      <div class="card">
        <div class="imgBx">
          <img src="http://pngimg.com/uploads/cake/cake_PNG96975.png" />
        </div>
        <div class="contentBx">
          <h2>Chocolate Cake</h2>
          <div class="size">
            <h3>Size :</h3>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>
          <div class="color">
            <h3>Color :</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a href="#">Buy Now</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
