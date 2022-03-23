import React from 'react'
import { Container,Navbar,Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header >
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container >
        
        <LinkContainer to="/">
        <Navbar.Brand className ='name'>
          Purnima Kumar  
          </Navbar.Brand>
          </LinkContainer>
          
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <LinkContainer to="/projects">
            <Nav.Link ><i className="fa-solid fa-star"></i> Projects</Nav.Link></LinkContainer>
            <LinkContainer to="/education">
            <Nav.Link ><i className='fa-solid fa-graduation-cap'></i> Education</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/workex">
            <Nav.Link ><i className="fa-solid fa-briefcase"></i> Work Experience</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
    
    
    
  )
}

export default Header


