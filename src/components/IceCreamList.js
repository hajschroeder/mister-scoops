import React from "react";
import IceCream from "./IceCream";

function IceCreamList(){
  return (
    <React.Fragment>
      <IceCream 
        name="name1"
        origin="origin1"
        price="price1"
        flavor="flavor1"/>
      <IceCream 
        name="name2"
        origin="origin2"
        price="price2"
        flavor="flavor2"/>
      <IceCream 
        name="name3"
        origin="origin3"
        price="price3"
        flavor="flavor3"/>
    </React.Fragment>
  );
}

export default IceCreamList
