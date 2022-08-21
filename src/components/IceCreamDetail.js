import React from "react";
import PropTypes from "prop-types";

function IceCreamDetail(props){
  const { iceCream, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Ice Cream Deets</h1>
      <h3>{iceCream.name}</h3>
      <p><em>{iceCream.origin}</em></p>
      <p><em>${iceCream.price}</em></p>
      <p><em><b>{iceCream.flavor}</b></em></p>
      <button onClick={ props.onClickingEdit} >Update the creams</button>
      <button onClick={()=> onClickingDelete(iceCream.id)}>Get rid of this Iced Cream</button>
      <hr/>
    </React.Fragment>
  );
}

IceCreamDetail.propTypes = {
  iceCream: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default IceCreamDetail;
