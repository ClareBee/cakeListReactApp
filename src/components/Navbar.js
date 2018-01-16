import React from 'react';
import { Link } from 'react-router-dom';
import {IndexLinkContainer} from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap/lib';

const NavBar = () => {
  return(
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          CakeCakeCake
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <IndexLinkContainer to="/cakes">
          <NavItem>All Cakes</NavItem>
        </IndexLinkContainer>
        <IndexLinkContainer to="/addNewCake">
          <NavItem>Add New Cake</NavItem>
        </IndexLinkContainer>
      </Nav>
    </Navbar>
  )
}


export default NavBar;
