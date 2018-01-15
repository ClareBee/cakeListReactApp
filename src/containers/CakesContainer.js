import React from 'react';

class CakesContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cakes: []
    }
  }

  render(){
    return(
      <div>This is the cake container</div>
    )
  }

}

export default CakesContainer;
