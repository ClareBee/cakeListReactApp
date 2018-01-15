import React from 'react';
import CakeList from '../components/CakeList';

class CakesContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cakes: [],
      chosenCake: null
    }
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(index){
    this.setState({chosenCake: index});
  }

  render(){
    //gets selected cake using index from list click event
    var cake = this.state.cakes[this.state.chosenCake];
    console.log(cake);
    return(
      <div>
        <h1>This is the cake container</h1>

        <CakeList cakes={this.state.cakes} onClick={this.handleClick} cake={cake} index={this.state.chosenCake}/>
      </div>
    )
  }
}

export default CakesContainer;
