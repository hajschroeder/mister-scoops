import React from "react";
import NewIceCreamForm from "./NewIceCreamForm";
import IceCreamList from "./IceCreamList";
import IceCreamDetail from "./IceCreamDetail";
import EditIceCreamForm from "./EditIceCreamForm";


class IceCreamControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainIceCreamList : [],
      selectedIceCream: null,
      editing: false 
    };
    this.handleClick = this.handleClick.bind(this); 
  }

  handleClick = () =>{
    if (this.state.selectedIceCream != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedIceCream: null,
        editing: false 
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

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingIceCreamInList = (iceCreamToEdit) => {
    const editedMainIceCreamList = this.state.mainIceCreamList.filter(iceCream => iceCream.id !== this.state.selectedIceCream.id).concat(iceCreamToEdit);
    this.setState({
      mainIceCreamList: editedMainIceCreamList,
      editing: false,
      selectedIceCream: null
    });
  }

  handleDecrementingIceCream = (id) => {
    const decrementInventory = this.state.mainIceCreamList.filter(iceCream => iceCream.id === id)[0];
    if(decrementInventory.quantity > 0) {
      decrementInventory.quantity -= 1
    }
  }
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if (this.state.editing) {
      currentlyVisibleState = <EditIceCreamForm iceCream = {this.state.selectedIceCream} onEditIceCream = {this.handleEditingIceCreamInList} />
      buttonText = "Back to the dreamy creamys"
    } else if (this.state.selectedIceCream != null) {
      currentlyVisibleState= 
      <IceCreamDetail 
      iceCream = {this.state.selectedIceCream} 
      onClickingDelete = {this.handleDeletingIceCream} 
      onClickingEdit = {this.handleEditClick}
      onClickingDecrement = {this.handleDecrementingIceCream}/>
      buttonText = "Return to the iced creams!" 
    }else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewIceCreamForm 
      onNewIceCreamCreation={this.handleAddingNewIceCreamToList} />;
      buttonText = "Return to the iced creams"
    } else {
      currentlyVisibleState = <IceCreamList 
      iceCreamList={this.state.mainIceCreamList} 
      onIceCreamSelection={this.handleChangingSelectedIceCream}/>  
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