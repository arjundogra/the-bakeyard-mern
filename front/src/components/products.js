import React from "react";
import Card from "../sComponents/Card";
import { CAKEDATA } from "../data/cake";
import Navbar from "./Navbar";

function products() {
  const Cards = () => {
    return (
      <div className="allCards">
        {CAKEDATA.map((card) => (
          <Card
            name={card.name}
            price={card.price}
            key={card.key}
            img={card.img}
          />
        ))}
      </div>
    );
  };
  return (
    <>
      <div className="productsContainer">
        <div className="products">
          <h2 className="titleProducts">All Products</h2>
          {/* <div className="allCards"> */}
          <Cards />
        </div>
      </div>
    </>
  );
}

export default products;
