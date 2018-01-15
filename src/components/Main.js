import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './Navbar';
import CakesContainer from '../containers/CakesContainer';
import CakeForm from './CakeForm';

class Main extends React.Component {
  render(){
    return(
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path="/" component={CakesContainer} />
          <Route path="/addNewCake" component={CakeForm} />
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;
