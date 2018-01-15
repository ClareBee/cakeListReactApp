import React from 'react';
import uniqBy from 'lodash/uniqBy';

class CakeList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let uniqueCakes = uniqBy(this.props.cakes, 'name');
    const cakes = uniqueCakes.map((cake, index) => {
      if(cake.name){
      return <li value={index} key={index}>
        {cake.name}
        <img height="100" src={cake.imageUrl} alt="cake"/>
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
