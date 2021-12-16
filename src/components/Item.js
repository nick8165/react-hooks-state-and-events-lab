import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  const itemClass = inCart ? "in-cart" : ""
  const itemText = inCart ? `Remove` : `Add to Cart`
  function handleClick() {
    setInCart((inCart) => !inCart)
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{itemText}</button>
    </li>
  );
}

export default Item;
