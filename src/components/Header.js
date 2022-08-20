import React from "react";
import iceCreamGround from "./../img/creamy.jpg";

function Header() {
  return (
    <React.Fragment>
      <h1>Inventory Tracker</h1>
      <img src={iceCreamGround} alt="happy ice cream" />
    </React.Fragment>
  );
}

export default Header;

