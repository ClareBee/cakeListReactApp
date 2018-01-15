import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <ul>
      <li><Link to="/">All cakes</Link></li>
      <li><Link to="/addNewCake">Add new cake</Link></li>
    </ul>
  )
}


export default Navbar;
