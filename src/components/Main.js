import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './NavBar';
import CakesContainer from '../containers/CakesContainer';
import CakeForm from './CakeForm';
import Cake from './Cake';

class Main extends React.Component {

  render(){

    return(
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path="/cakes" component={CakesContainer} />
          <Route exact path="/cakes/:id" component={Cake} />
          <Route path="/addNewCake" component={CakeForm} />
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;
