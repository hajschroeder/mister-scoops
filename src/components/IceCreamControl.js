import React from "react";
import NewIceCreamForm from "./NewIceCreamForm";
import IceCreamList from "./IceCreamList";

class IceCreamControl extends React.Component {
  constructor(props){
    this.state = {
      formVisibleOnPage: false
    };
  }

  render(){
    let currentlyVisibleState = null;
    let addIceCreamButton = null;
    if(this.state.formVisibleOnPage) {
      currentlyVisibleState= <NewIceCreamForm />
    } else {
      currentlyVisibleState = <IceCreamList />  
      addIceCreamButton= <button onClick={this.handleClick}>Add A Flavuh!</button>
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        {addIceCreamButton}
      </React.Fragment>
    );
  }
}

export default IceCreamControl;