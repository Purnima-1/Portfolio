import React from 'react'
import { Accordion } from 'react-bootstrap'

const Projects = () => {
  return (
    <div container='my-5'>
        <br/>
        <Accordion defaultActiveKey="">
    <Accordion.Item  eventKey="0">
      <Accordion.Header >Show Flix App</Accordion.Header>
      <Accordion.Body>
      Github Link: <a href= 'https://github.com/Purnima-1/showsApp' target='_blank' rel="noreferrer">Click here</a>
              </Accordion.Body>
    </Accordion.Item>
    <br/>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Expense-Tracker App</Accordion.Header>
      <Accordion.Body>
      URL: <a href='https://track-your-expenses-app.netlify.app' target='_blank' rel="noreferrer">Click here</a>
        
      </Accordion.Body>
    </Accordion.Item>
    <br/>
    <Accordion.Item eventKey="3">
      <Accordion.Header>E-commerce App</Accordion.Header>
      <Accordion.Body>
      URL: <a href= 'https://pacific-island-51855.herokuapp.com/' target='_blank' rel="noreferrer">Click here</a>
      </Accordion.Body>
    </Accordion.Item>
    <br/>
    <Accordion.Item eventKey="4">
      <Accordion.Header>EventBrite App</Accordion.Header>
      <Accordion.Body>
      URL: <a href='https://murmuring-peak-86185.herokuapp.com/' target='_blank' rel="noreferrer">Click here</a>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
    </div>
  )
}

export default Projects