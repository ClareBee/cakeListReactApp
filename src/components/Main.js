import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Main extends React.Component {
  render(){
    return(
      <Router>
        <React.Fragment>
          <Route exact path="/" component={CakesContainer} />
          <Route path="/chosenCake" component={Cake} />
          <Route path="/addNewCake" component={CakeForm} />
        </React.Fragment>
      </Router>
    )
  }
}

export default Main;
