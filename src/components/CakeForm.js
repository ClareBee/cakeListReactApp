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
  }

  handleSubmit(e){
    console.log("something submitted");
    e.preventDefault();
    const newCake = new FormData(e.target);
    //fetch post to /cakes url
    
  }

  render(){
    console.log(this.state.name);
    return(
      <React.Fragment>
        <h1>this will be the cake form</h1>
        <form action="/cakes" method="" onSubmit={this.handleSubmit}>
          <input required type="text" value={this.state.name} name="name" placeholder="name of cake"/>
          <input required type="url" name="imageUrl" placeholder="url for an image"/>
          <input required type="number" min="0" max="5" name="yumFactor" placeholder="rating/5"/>
          <input required type="text" name="comment" placeholder="comment"/>
          <button type="submit">Submit</button>
        </form>
      </React.Fragment>
    )
  }
}

export default CakeForm;
