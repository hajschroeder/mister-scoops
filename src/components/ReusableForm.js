import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <input
          type='text'
          name='name'
          placeholder='Ice Cream Name' />

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
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm