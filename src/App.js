import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Navbar';
import VendingMachine from './VendingMachine';

import Celery from './Celery';
import Zucchini from './Zucchini';
import Kale from './Kale';
import Bokchoy from './Bokchoy';
import Cucumber from './Cucumber';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/celery">
          <Celery />
        </Route>
        <Route exact path="/zucchini">
          <Zucchini />
        </Route>
        <Route exact path="/kale">
          <Kale />
        </Route>
        <Route exact path="/bokchoy">
          <Bokchoy />
        </Route>
        <Route exact path="/cucumber">
          <Cucumber />
        </Route>       

      </BrowserRouter>


    </div>
  );
}

export default App;

// Could not find a declaration file for module 'react-router-dom'. '/home/gray/springboard_curriculum/unit41/vending-machine/node_modules/react-router-dom/index.js' implicitly has an 'any' type.
//   Try `npm i --save-dev @types/react-router-dom` if it exists or add a new declaration (.d.ts) file containing `declare module 'react-router-dom';`ts(7016)
