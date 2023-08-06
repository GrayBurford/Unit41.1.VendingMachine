import React from "react";
import { Link } from 'react-router-dom';


function Zucchini () {
  return (
    <div>
      <h1>Zucchini!</h1>
      <div>
        <Link exact to="/">Go back to Vending Machine</Link>
      </div>
      <img
        src="https://chefsmandala.com/wp-content/uploads/2018/03/Squash-Zucchini.jpg"
        alt="Zucchini"
      />
    </div>
  );
}

export default Zucchini;
