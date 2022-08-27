import React from "react";
import PropTypes from "prop-types";

function IceCream(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenIceCreamClicked(props.id)}>
        <p>{props.name}</p>
        <p><em>{props.quantity}</em></p>
        <p><b>${props.price}</b></p>
        <p><em>{props.flavor}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

IceCream.propTypes= {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  flavor: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenIceCreamClicked: PropTypes.func 
};

export default IceCream;
