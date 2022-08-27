import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";



function NewIceCreamForm(props){

  function handleNewIceCreamFormSubmission(event) {
    event.preventDefault();
    props.onNewIceCreamCreation({
      name: event.target.name.value,
      quantity: event.target.quantity.value,
      flavor: event.target.flavor.value,
      price:event.target.price.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewIceCreamFormSubmission}
        buttonText="I am in NICF.js" />
    </React.Fragment>
  )
}

NewIceCreamForm.propTypes = {
  onNewIceCreamCreation: PropTypes.func 
}
export default NewIceCreamForm;