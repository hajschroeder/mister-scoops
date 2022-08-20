import React from "react";
import NewIceCreamForm from "./NewIceCreamForm";
import IceCreamList from "./IceCreamList";

class IceCreamControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () =>{
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.formVisibleOnPage) {
      currentlyVisibleState= <NewIceCreamForm />
      buttonText = "Return to the iced creams!"
    } else {
      currentlyVisibleState = <IceCreamList />  
      buttonText="Add an iced cream!";
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default IceCreamControl;