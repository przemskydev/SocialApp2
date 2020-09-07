import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import logo from '../../assets/logo.svg';

const NavBar = () => (
  <>
    <Navbar bg="dark" fixed="top">
      <Navbar.Brand href="/">
        <img
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">Mark Otto</a>
        </Navbar.Text>
        <Button variant="dark">Dark</Button>
      </Navbar.Collapse>
    </Navbar>
  </>
);

export default NavBar;
