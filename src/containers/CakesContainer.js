import React from 'react';

class CakesContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cakes: []
    }
  }
  componentDidMount(){
    const cakeUrl = "http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes";
    fetch(cakeUrl)
    .then(function(response) {
      if(response.ok){
        return response.json();
      }
      throw new Error("Network response wasn't ok");
    })
    .then(data => {
      this.setState({cakes: data});
      console.log(data);
    })
    .catch(function(error){
      console.log(error.message);
    });
  }

  render(){
    return(
      <div>This is the cake container</div>
    )
  }

}

export default CakesContainer;
