import React from "react";
import IceCream from "./IceCream";
import PropTypes from "prop-types"
// import IceCreamControl from "./IceCreamControl";


function IceCreamList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.iceCreamList.map((iceCream, index) =>
        <IceCream name={iceCream.name}
          origin={iceCream.origin}
          price={iceCream.price}
          flavor={iceCream.flavor}
          key={index} />
      )}
    </React.Fragment>
  );
}

IceCreamList.propTypes = {
  iceCreamList: PropTypes.array
};

export default IceCreamList
