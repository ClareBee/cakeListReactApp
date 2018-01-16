import React from 'react';
import {IndexLinkContainer} from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap/lib';

const NavBar = () => {
  return(
    <Navbar className="nav">
      <Navbar.Header>
        <Navbar.Brand>
          <h1 className="title">CakeCakeCake</h1>
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
