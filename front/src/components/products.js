import React from "react";
import Card from "../sComponents/Card";

function products() {
  return (
    <div className="productsContainer">
      <div className="products">
        <h2 className="titleProducts">All Products</h2>
        <div className="allCards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default products;
