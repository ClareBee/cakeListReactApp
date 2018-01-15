import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Navbar from './Navbar';
import CakesContainer from '../containers/CakesContainer';
import CakeForm from './CakeForm';
import Cake from './Cake';

class Main extends React.Component {

  render(){
    // const Cakes = () => (
    // <Switch>
    //   <Route exact path='/cakes' component={CakesContainer}/>
    //   <Route path='/cakes/:id' component={Cake}/>
    // </Switch>
    // )

    return(
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/cakes" component={CakesContainer} />
          <Route exact path="/cakes/:id" component={Cake} />
          <Route path="/addNewCake" component={CakeForm} />
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;
