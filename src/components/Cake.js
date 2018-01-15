import React from 'react';

class Cake extends React.Component {

  render(){

    // if(!this.props.cake){
    //   return null
    // }
    // var selectedCake = this.props.cake;
    // console.log(selectedCake);
    console.log(this.props);
    console.log(this.props.match.params.id);
    return(
      <div>
        <p>This is the individual cake</p>

      </div>
    );
  }
}

export default Cake;
