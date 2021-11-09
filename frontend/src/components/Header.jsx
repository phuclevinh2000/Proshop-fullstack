import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant="dark" expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>Proshop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            {/* change from ml-auto to ms-auto */}
            <Nav className='ms-auto'> 
            {/* Using font awesome for icons */}
              <Nav.Link href='/cart'><i className="fas fa-shopping-cart"></i> Cart</Nav.Link> 
              <Nav.Link href='/login'><i className="fas fa-user"></i> Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
