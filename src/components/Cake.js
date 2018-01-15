import React from 'react';

class Cake extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cake: {}
    }
  }

  componentDidMount(){
    const chosenCakeUrl = `http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes/${this.props.match.params.id}`;
    fetch(chosenCakeUrl)
    .then(function(response) {
      if(response.ok){
        return response.json();
      }
      throw new Error("Network response wasn't ok");
    })
    .then(data => {
      this.setState({cake: data});
    })
    .catch(function(error){
      console.log(error.message);
    });
  }

  render(){
    if(!this.state.cake){
      return null
    }
    let cake = this.state.cake;

    return(
      <div>
        <p>This is the individual cake</p>
        <p>{cake.name}</p>
        <img height="100" src={cake.imageUrl} alt="Individual cake"/>
        <p>{cake.comment}</p>
        <p>Yum Factor: {cake.yumFactor} /5 </p>
      </div>
    );
  }
}

export default Cake;
