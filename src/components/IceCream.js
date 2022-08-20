import React from "react";
import PropTypes from "prop-types";

function IceCream(props) {
  return (
    <React.Fragment>
      <Header />
      <p>{props.name}</p>
      <p><em>{props.origin}</em></p>
      <p><b>{props.price}</b></p>
      <p><em>{props.flavor}</em></p>
      <hr/>
    </React.Fragment>
  );
}

IceCream.propTypes= {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.int,
  flavor: PropTypes.string
}

export default IceCream;
