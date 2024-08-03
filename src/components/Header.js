import React from "react";
import {Navbar, Nav, NavDropdown,Container,Image} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {

    return(
        <>
          <header>
          <Navbar className="navbar-style" expand="lg">
            <Container>
            <LinkContainer to='/'>
              <Navbar.Brand href="/">
              <Image className="logo-style"
              src= 'images/logo.jpeg'  roundedCircle />
              <h6 className="logo-text">Visvesvaraya Technological University</h6>
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
            <Nav className="ml-auto">
              <LinkContainer to='/'>
                <Nav.Link href="#">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about'>
              <Nav.Link href="#">About us</Nav.Link> 
              </LinkContainer>
              <NavDropdown title="Academics" id="basic-nav-dropdown">
                <LinkContainer to='/admission'>
                  <NavDropdown.Item href="#">Admissions</NavDropdown.Item>
                </LinkContainer>
                
                <NavDropdown.Item href="#"> Circulars and Notificaions</NavDropdown.Item>
                <NavDropdown.Item href="#">Certificate Issued</NavDropdown.Item>
                
              </NavDropdown>
              <NavDropdown title="Examination" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Examination Guidelines</NavDropdown.Item>
                <NavDropdown.Item href="#">Examination Application</NavDropdown.Item>
                <LinkContainer to='/result/loginPage'>
                  <NavDropdown.Item href="#">Results</NavDropdown.Item>
                </LinkContainer>
                
                
              </NavDropdown>
              <NavDropdown title="VTU Departments" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Civil Engineering</NavDropdown.Item>
                <NavDropdown.Item href="#">Computer Science and Enginnering</NavDropdown.Item>
                <NavDropdown.Item href="#">Electronics and COmmunication</NavDropdown.Item>
                <NavDropdown.Item href="#">Electrical Engineering</NavDropdown.Item>
                
              </NavDropdown>
              
              <NavDropdown title="Staff Login" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Login as Admin</NavDropdown.Item> 
              </NavDropdown>
            </Nav>
            </Container>
            
            </Navbar>
          </header>
        
        </>
    )
}

export default Header;