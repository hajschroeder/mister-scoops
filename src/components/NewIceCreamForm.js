import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";



function NewIceCreamForm(props){

  function handleNewIceCreamFormSubmission(event) {
    event.preventDefault();
    props.onNewIceCreamCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      flavor: event.target.flavor.value,
      price:event.target.price.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewIceCreamFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Ice Cream Name' />
        <input
          type='text'
          name='origin'
          placeholder='Ice Cream Origin' />
        <input
          type='text'
          name='price'
          placeholder='Ice Cream Price' />
        <input
          type='text'
          name='flavor'
          placeholder='Ice Cream Flavor' />
        <button type='submit'>Add the iced cream!</button>
      </form>
    </React.Fragment>
  )
}

NewIceCreamForm.propTypes = {
  onNewIceCreamCreation: PropTypes.func 
}
export default NewIceCreamForm;