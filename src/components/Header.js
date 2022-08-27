import React from "react";
import iceCreamGround from "./../img/creamy.jpg";

function Header() {
  return (
    <React.Fragment>
      <h1>Mister Scoops Ice Cream Dream!</h1>
      <h3>The worst Ice Cream in Town!</h3>
      <img src={iceCreamGround} alt="happy ice cream" />
    </React.Fragment>
  );
}

export default Header;

