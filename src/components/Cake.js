import React from 'react';

class Cake extends React.Component {

  render(){

    if(!this.props.cake){
      return null
    }
    var selectedCake = this.props.cake;
    console.log(selectedCake);

    return(
      <div>
        <p>This is the individual cake</p>
        <p>{selectedCake.name}</p>
      </div>
    );
  }
}

export default Cake;
