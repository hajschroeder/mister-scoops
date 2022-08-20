import React from "react";
import IceCream from "./IceCream";

const mainIceCreamList = [
  {
    name:'name1',
    origin: 'origin1',
    price: 'price1',
    flavor: 'flavor1'
  },
  {
    name:'name2',
    origin: 'origin2',
    price: 'price2',
    flavor: 'flavor2'
  },
  {
    name:'name3',
    origin: 'origin3',
    price: 'price3',
    flavor: 'flavor3'
  },
];

function IceCreamList(){
  return (
    <React.Fragment>
      <hr/>
      {mainIceCreamList.map((iceCream, index) =>
        <IceCream name={iceCream.name}
          origin={iceCream.origin}
          price={iceCream.price}
          flavor={iceCream.flavor}
          key={index} />  
      )}
    </React.Fragment>
  );
}

export default IceCreamList
