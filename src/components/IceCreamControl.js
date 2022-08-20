import React from "react";
import NewIceCreamForm from "./NewIceCreamForm";
import IceCreamList from "./IceCreamList";

class IceCreamControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainIceCreamList : []
    };
    this.handleClick = this.handleClick.bind 
  }

  handleClick = () =>{
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewIceCreamToList = (newIceCream) => {
    const newMainIceCreamList = this.state.mainIceCreamList.concat(newIceCream);
    this.setState({
      mainIceCreamList: newMainIceCreamList,
      formVisibleOnPage: false
    });
  }
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.formVisibleOnPage) {
      currentlyVisibleState= <NewIceCreamForm onNewIceCreamCreation={this.handleAddingNewIceCreamToList} />
      buttonText = "Return to the iced creams!"
    } else {
      currentlyVisibleState = <IceCreamList iceCreamList={this.state.mainIceCreamList} />  
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