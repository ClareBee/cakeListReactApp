import React from 'react';
import uniqBy from 'lodash/uniqBy';

class CakeList extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

//gets the index of the cake that the user has clicked on
  handleClick(e){
    console.log(e.currentTarget.value);
  }

  render(){
  //removes duplicate names and invalid entries before creating li element
    let uniqueCakes = uniqBy(this.props.cakes, 'name');
    const cakes = uniqueCakes.map((cake, index) => {
      if(cake.name && cake.imageUrl){
      return <li value={index} key={index} onClick={this.handleClick}>
        {cake.name}
        <img height="100" src={cake.imageUrl} alt="A cake" />
      </li>
      }
    });

    return(
      <div>
      <h1>This is the cake list</h1>
      <ul>
        {cakes}
      </ul>
    </div>
    )
  }
}
export default CakeList;
