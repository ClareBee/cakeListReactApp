import React from 'react';

class CakeForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      imageUrl: '',
      yumFactor: 0,
      comment: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addCake = this.addCake.bind(this);
  }

  handleChange(e){
    console.log(e);
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit(e){
    console.log("something submitted");
    e.preventDefault();
    const newCake = this.state;
    this.addCake(newCake);
    //clears out form on submission
    this.refs.cakeForm.reset();
    //redirects to main page on subission
    this.props.history.push('/cakes');
  }

  addCake(cake){
    const url = "http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes";
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(cake),
      headers: new Headers({
      'Content-Type': 'application/json'
    })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}

  render(){
    console.log(this.state.name);
    return(
      <React.Fragment>
        <h1>Add your favourite cake to our database</h1>
        <div className="form-container">
          <form className="cake-form" ref="cakeForm" action="/cakes" method="" onSubmit={this.handleSubmit}>
            <div className="row">
              <input onChange={this.handleChange} required type="text" name="name" placeholder="Name of the cake"/>
            </div>
            <div className="row">
              <input onChange={this.handleChange} required type="url" name="imageUrl" placeholder="Url for an image"/>
            </div>
          <div className="row">
          <input onChange={this.handleChange} required type="number" min="1" max="5" name="yumFactor" placeholder="Rating/5"/>
        </div>
        <div className="row">
          <input onChange={this.handleChange} required type="text" name="comment" placeholder="Comment"/>
        </div>
      <div className="row">
          <button type="submit">Submit Your Cake!</button>
        </div>
        </form>
      </div>
      </React.Fragment>
    )
  }
}

export default CakeForm;
