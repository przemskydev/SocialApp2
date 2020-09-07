import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.svg';
import Button from '../button/button';

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
          <h4>
            Signed in as: <a href="/user">Mark Otto</a>
          </h4>
        </Navbar.Text>
        <Button down>Logout</Button>
      </Navbar.Collapse>
    </Navbar>
  </>
);

export default NavBar;
