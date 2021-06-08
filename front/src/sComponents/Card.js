import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/actions";

function Card(props) {
  const dispatch = useDispatch();
  const addItemToCart = () => {
    const data = {
      name: props.name,
      price: props.price,
      img: props.img,
    };
    dispatch(addToCart(data));
  };
  return (
    <div class="cardContainer">
      <div class="card" key={props.key}>
        <div class="imgBx">
          <img src={props.img} />
        </div>
        <div class="contentBx">
          <h2>{props.name}</h2>
          <div class="size">
            <h3>Price</h3>
            <span>Rs.{props.price}</span>
          </div>
          {/* <div class="color">
            <h3>Color :</h3>
            <span></span>
            <span></span>
            <span></span>
          </div> */}
          <a onClick={addItemToCart}>Add To Card</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
