import React from 'react'
import { Container,Navbar,Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
    <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand className ='brand'>Purnima Kumar</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to= "/tickets">
            <Nav.Link ><i className="fa-solid fa-ticket"></i> Work Experience</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
            <Nav.Link ><i className='fas fa-user'></i> Education</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
    
    
    
  )
}

export default Header


