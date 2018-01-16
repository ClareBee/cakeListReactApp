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
    this.addCake = this.addCake.bind(this);
  }

  handleChange(e){
    const nameInput = e.target.name;
    const urlInput = e.target.imageUrl;
    const commentInput = e.target.comment;
    const ratingInput = e.target.yumFactor;
    console.log(name.value);

    this.setState({
      name: nameInput,
      imageUrl: urlInput,
      yumFactor: ratingInput,
      comment: commentInput
    });
  }
  handleSubmit(e){
    console.log("something submitted");
    e.preventDefault();
    const newCake = new FormData(e.target.value);
    //fetch post to /cakes url
    console.log(newCake);
    // this.addCake(newCake)
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
        <h1>this will be the cake form</h1>
        <form action="/cakes" method="" onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} required type="text" name="name" placeholder="name of cake"/>
          <input onChange={this.handleChange} required type="url" name="imageUrl" placeholder="url for an image"/>
          <input onChange={this.handleChange} required type="number" min="1" max="5" name="yumFactor" placeholder="rating/5"/>
          <input onChange={this.handleChange} required type="text" name="comment" placeholder="comment"/>
          <button type="submit">Submit</button>
        </form>
      </React.Fragment>
    )
  }
}

export default CakeForm;
