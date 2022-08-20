import React from "react";
import PropTypes from "prop-types";

function IceCream(props) {
  return (
    <React.Fragment>
      <p>{props.name}</p>
      <p><em>{props.origin}</em></p>
      <p><b>{props.price}</b></p>
      <p><em>{props.flavor}</em></p>
      <hr/>
    </React.Fragment>
  );
}

IceCream.propTypes= {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  flavor: PropTypes.string.isRequired
}

export default IceCream;
