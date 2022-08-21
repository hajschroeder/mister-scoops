import React from "react";
import PropTypes from "prop-types";

function IceCreamDetail(props){
  const { iceCream } = props;

  return (
    <React.Fragment>
      <h1>Ice Cream Deets</h1>
      <h3>{iceCream.name}</h3>
      <p><em>{iceCream.origin}</em></p>
      <p><em>${iceCream.price}</em></p>
      <p><em><b>{iceCream.flavor}</b></em></p>
      <hr/>
    </React.Fragment>
  );
}

IceCreamDetail.propTypes = {
  iceCream: PropTypes.object
};

export default IceCreamDetail;
