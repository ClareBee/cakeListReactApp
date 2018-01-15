import React from 'react';

class Cake extends React.Component {

  componentWillUpdate(){
    console.log("hello");
    const chosenCakeUrl = "http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes/`${this.props.match.params.id}`";
    fetch(chosenCakeUrl)
    .then(function(response) {
      if(response.ok){
        return response.json();
      }
      throw new Error("Network response wasn't ok");
    })
    .then(data => {
      console.log(data);
    })
    .catch(function(error){
      console.log(error.message);
    });
  }
  render(){
    const chosenCakeUrl = `http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes/${this.props.match.params.id}`;
    fetch(chosenCakeUrl)
    .then(function(response) {
      if(response.ok){
        return response.json();
      }
      throw new Error("Network response wasn't ok");
    })
    .then(data => {
      console.log(data);
    })
    .catch(function(error){
      console.log(error.message);
    });
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
