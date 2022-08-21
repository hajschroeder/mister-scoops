import React from "react";
import NewIceCreamForm from "./NewIceCreamForm";
import IceCreamList from "./IceCreamList";
import IceCreamDetail from "./IceCreamDetail";

class IceCreamControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainIceCreamList : [],
      selectedIceCream: null
    };
    this.handleClick = this.handleClick.bind(this); 
  }

  handleClick = () =>{
    if (this.state.selectedIceCream != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedIceCream: null
      });
    } else{ 
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewIceCreamToList = (newIceCream) => {
    const newMainIceCreamList = this.state.mainIceCreamList.concat(newIceCream);
    this.setState({
      mainIceCreamList: newMainIceCreamList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedIceCream = (id) => {
    const selectedIceCream = this.state.mainIceCreamList.filter(iceCream  => iceCream.id === id)[0];
    this.setState({selectedIceCream: selectedIceCream});
  }

  handleDeletingIceCream = (id) => {
    const newMainIceCreamList = this.state.mainIceCreamList.filter(iceCream => iceCream.id !== id);
    this.setState({
      mainIceCreamList: newMainIceCreamList,
      selectedIceCream: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.selectedIceCream != null) {
      currentlyVisibleState= <IceCreamDetail iceCream = {this.state.selectedIceCream} />
      buttonText = "Return to the iced creams!" 
    }
    else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewIceCreamForm onNewIceCreamCreation={this.handleAddingNewIceCreamToList} />;
      buttonText = "Return to the iced creams"
    } else {
      currentlyVisibleState = <IceCreamList iceCreamList={this.state.mainIceCreamList} onIceCreamSelection={this.handleChangingSelectedIceCream}/>  
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