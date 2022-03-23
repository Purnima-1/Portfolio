import React from 'react'
import { Container,Navbar,Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
    <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
      <Container>
        
        <Navbar.Brand className ='name'>
          <a href ='/'>
          Purnima Kumar  </a></Navbar.Brand>
          
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            <Nav.Link ><i className="fa-solid fa-briefcase"></i> Work Experience</Nav.Link>
            
            <Nav.Link ><i className='fa-solid fa-graduation-cap'></i> Education</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
    
    
    
  )
}

export default Header


