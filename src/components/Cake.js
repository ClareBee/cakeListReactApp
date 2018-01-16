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
      <figure className="individual-cake">
        <h1>Your Cake</h1>
        <h2>{cake.name}</h2>
        <img height="100" src={cake.imageUrl} alt="Individual cake"/>
        <figcaption>
          <p>Comment: {cake.comment}</p>
          <p>Yum Factor: {cake.yumFactor} /5 </p>
        </figcaption>
      </figure>
    );
  }
}

export default Cake;
