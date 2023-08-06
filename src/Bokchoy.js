import React from "react";
import { Link } from 'react-router-dom';


function Bokchoy () {
  return (
    <div>
      <h1>You chose Bokchoy!</h1>
      <div>
        <Link exact to="/">Go back to Vending Machine</Link>
      </div>
      <img
        src="https://www.mashed.com/img/gallery/what-is-bok-choy-and-which-part-can-you-eat/l-intro-1621618217.jpg"
        alt="Bokchoy"
      />
    </div>
  );
}

export default Bokchoy;
