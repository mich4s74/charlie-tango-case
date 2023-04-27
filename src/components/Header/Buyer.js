/*
{
  "id": "ecf703ec",
  "maxPrice": 1000000,
  "minSize": 71,
  "adults": 2,
  "children": 0,
  "description": "Couple is looking for a Fritidshus with a minimum size of 71 m2 and a maximum price of 1.000.000 kr. Dolor quis molestias nam nulla nostrum quas occaecati quos.",
  "estateType": "5",
  "takeoverDate": "2023-05-04"
}
*/

import React from "react";

function Buyer(props) {
  return (
    <article>
      <h2>Buyer ID: {props.id}</h2>
      <p>
        <b>Description:</b> {props.description}
      </p>
      <p>Take over date: {props.takeoverDate}</p>
      <p>
        Family Size: {props.adults} Adult(s) + {props.children} children
      </p>
    </article>
  );
}

export default Buyer;
