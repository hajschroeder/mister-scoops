import React from "react";
import IceCream from "./IceCream";
import PropTypes from "prop-types"

function IceCreamList(props){
  return (
    <React.Fragment>
      <hr />
      {props.iceCreamList.map((iceCream) =>
        <IceCream 
          whenIceCreamClicked = { props.onIceCreamSelection }
          name={iceCream.name}
          quantity={iceCream.quantity}
          price={iceCream.price}
          flavor={iceCream.flavor}
          id={iceCream.id}
          key={iceCream.id} />
      )}
    </React.Fragment>
  );
}

IceCreamList.propTypes = {
  iceCreamList: PropTypes.array,
  onIceCreamSelection: PropTypes.func
};

export default IceCreamList
