import React from 'react';
import './App.css';


import Navbar from './components/Navbar';
import Pay from './components/Pay';

import Search from './components/Search';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
   <Router>
     <div className="App container">
       <Navbar className="mb-5"/>
      <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/pay/:id" component={Pay} />
          <Route exact path="/search" component={Search} />
          
      </Switch>
      </div>
   </Router>
  );
}

export default App;
