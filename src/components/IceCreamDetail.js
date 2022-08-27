import React from "react";
import PropTypes from "prop-types";

function IceCreamDetail(props){
  const { iceCream, onClickingDelete, onClickingDecrement } = props;

  return (
    <React.Fragment>
      <h1>Ice Cream Deets</h1>
      <h3>{iceCream.name}</h3>
      <p><em>${iceCream.price}</em></p>
      <p><em><b>{iceCream.flavor}</b></em></p>
      <p><em>Scoops Available:{iceCream.quantity}</em></p>
      <button onClick={ props.onClickingEdit} >Update the creams</button>
      <button onClick={()=> onClickingDelete(iceCream.id)}>Get rid of this Iced Cream</button>
      <button onClick={()=> onClickingDecrement(iceCream.id)}>Get rid of a scoop!</button>

      <hr/>
    </React.Fragment>
  );
}

IceCreamDetail.propTypes = {
  iceCream: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingDecrement: PropTypes.func
};

export default IceCreamDetail;
