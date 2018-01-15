import React from 'react';

class Cake extends React.Component {

  render(){
    if(!this.props.cake){
      return null;
    }
    var chosenCake = this.props.cake;
    return(
      <h1>{chosenCake.name}</h1>
    )
  }
}

export default Cake
