import React from "react";
import { Link } from 'react-router-dom';


function Cucumber () {
  return (
    <div>
      <h1>Cucumber!</h1>
      <div>
        <Link exact to="/">Go back to Vending Machine</Link>
      </div>
      <img
        src="https://grocermbio.co.ke/wp-content/uploads/2022/07/cucumber.jpg"
        alt="Cucumber"
      />
    </div>
  );
}

export default Cucumber;
