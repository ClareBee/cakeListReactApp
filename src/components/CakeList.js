import React from 'react';
import { Link } from 'react-router-dom';

class CakeList extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

//gets the index of the cake that the user has clicked on
  handleClick(e){
    this.props.onClick(parseInt(e.currentTarget.value, 10));
  }

  addDefaultImage(e){
    //provides fallback for faulty entries in API
    e.target.src = "http://images.hellokids.com/_uploads/_tiny_galerie/20120416/l4n_how-to-draw-a-cake-for-kids-step-6.jpg";
  }

  render(){
  //removes duplicate names and invalid entries before creating li element
    const cakes = this.props.cakes.map((cake, index) => {
      if((cake.name && cake.imageUrl) && (cake.name.length > 4)){

      return <li className="cake-item" onClick={this.handleClick} key={index} value={index}>
              <Link className="cake-link" key={index} to={`/cakes/${cake.id}`}>
                <img className="cake-image" src={cake.imageUrl} alt="A cake" onError={this.addDefaultImage} />
                <div>{cake.name}</div>
              </Link>
              </li>
      }
    });

    return(
      <div>
        <h3 className="sub-title">So many cakes, so little time...</h3>
        <ul className="cake-list">
          {cakes}
        </ul>
      </div>
    );
  }
}

export default CakeList;
