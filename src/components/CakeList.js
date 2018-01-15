import React from 'react';
import { Link } from 'react-router-dom';
// import uniqBy from 'lodash/uniqBy';

class CakeList extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

//gets the index of the cake that the user has clicked on
  handleClick(e){
    this.props.onClick(parseInt(e.currentTarget.value, 10));
  }

  render(){
  //removes duplicate names and invalid entries before creating li element
    const cakes = this.props.cakes.map((cake, index) => {
      if(cake.name && cake.imageUrl){
      var cakeUrl = "/cakes/" + cake.id;
      return <Link to={cakeUrl} key={index} value={index} >
        {cake.name}
        <img height="100" src={cake.imageUrl} alt="A cake" />
      </Link>
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
