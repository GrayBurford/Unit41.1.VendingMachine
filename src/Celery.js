import React from "react";
import { Link } from 'react-router-dom';

function Celery () {
  return (
    <div>
      <h1>You chose Celery!</h1>
      <div>
        <Link exact to="/">Go back to Vending Machine</Link>
      </div>
      <img
        src="https://cdn.britannica.com/68/143768-050-108B71EC/Celery.jpg"
        alt="Celery"
      />
    </div>
  );
}

export default Celery;
