import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditIceCreamForm (props) {
  const { iceCream } = props;

  function handleEditIceCreamFormSubmission(event) {
    event.preventDefault();
    props.onEditIceCream({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      flavor: event.target.flavor.value});
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={ handleEditIceCreamFormSubmission }
        buttonText="update me reusable js" />
    </React.Fragment>
  );
}

EditIceCreamForm.propTypes  = {
  iceCream: PropTypes.object,
  onEditIceCream: PropTypes.func 
}
export default EditIceCreamForm