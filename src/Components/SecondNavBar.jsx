import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SecondNavBar = (props) => {
  return (
    <>
      {props.isloggedin ? <Navbar bg="primary" variant="dark">
        <Container className="second-navBar">
          <Nav className="me-auto">
            <Link to='./Home'>Home</Link>
            <NavDropdown title="MEN's" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Clothes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Footwear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Watches</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="WOMEN's" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Clothes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Footwear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Watches</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="KID's" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Clothes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Footwear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Watches</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="MOBILES" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Clothes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Footwear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Watches</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="GROCERY" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Clothes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Footwear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Watches</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="ELECTRONICS" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Clothes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Footwear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Watches</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar> : null}

    </>
  );
}


export default SecondNavBar;
