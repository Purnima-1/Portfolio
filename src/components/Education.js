import React from 'react'
import { Accordion } from 'react-bootstrap'

const Education = () => {
  return (
    <div>
        <br/>
    <Accordion defaultActiveKey="" >
    <Accordion.Item eventKey="0">
      <Accordion.Header>Full Stack Web Development Bootcamp from Kal Academy, Redmond</Accordion.Header>
      <Accordion.Body>
       <strong>HTML, CSS, Javascript, Angular, React, NodeJs</strong> <br/>
      
      </Accordion.Body>
    </Accordion.Item>
<br/>
<Accordion.Item eventKey="1">
      <Accordion.Header>Masters in Business Administration from Indore, MP, India</Accordion.Header>
      <Accordion.Body>
      <strong>2005-2007</strong> <br/>
              
      </Accordion.Body>
    </Accordion.Item>
    <br/>
    <Accordion.Item eventKey="2">
      <Accordion.Header>Bachelors in Commerce from Vizag, India</Accordion.Header>
      <Accordion.Body>
      <strong>2002-2005</strong> <br/>
      
              </Accordion.Body>
    </Accordion.Item>
    
    
    
   

  </Accordion>
  </div>
  )
}

export default Education