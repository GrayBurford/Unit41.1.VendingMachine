import React from "react";
import { Link } from 'react-router-dom';


function Kale () {
  return (
    <div>
      <h1>Kale!</h1>
      <div>
        <Link exact to="/">Go back to Vending Machine</Link>
      </div>
      <img
        src="https://images.heb.com/is/image/HEBGrocery/000320214-1"
        alt="Kale"
      />
    </div>
  );
}

export default Kale;
