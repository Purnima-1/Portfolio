import React from 'react'
import { Accordion } from 'react-bootstrap'

const Projects = () => {
  return (
    <div container='my-5'>
        <br/>
        <Accordion defaultActiveKey="">
    <Accordion.Item eventKey="0">
      <Accordion.Header>Shows App</Accordion.Header>
      <Accordion.Body>
      Github Link: 
              </Accordion.Body>
    </Accordion.Item>
    <br/>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Weather App</Accordion.Header>
      <Accordion.Body>
      Github Link: 
        
      </Accordion.Body>
    </Accordion.Item>
    <br/>
    <Accordion.Item eventKey="3">
      <Accordion.Header>E-commerce App</Accordion.Header>
      <Accordion.Body>
      Github Link: 
      </Accordion.Body>
    </Accordion.Item>
    <br/>
    <Accordion.Item eventKey="4">
      <Accordion.Header>EventBrite App</Accordion.Header>
      <Accordion.Body>
      Github Link: 
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
    </div>
  )
}

export default Projects