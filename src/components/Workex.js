import React from 'react'
import { Accordion } from 'react-bootstrap'
const Workex = () => {
  return (
    <div >
      <br/>
    <Accordion defaultActiveKey="">
    <Accordion.Item eventKey="0">
      <Accordion.Header>Orbitz Travels, India</Accordion.Header>
      <Accordion.Body>
      <strong>2007-2010</strong> <br/>
      Helped in designing the tour packages, selling the trade fairs
              </Accordion.Body>
    </Accordion.Item>
    <br/>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Across Ocean Travels, Los Angeles, CA</Accordion.Header>
      <Accordion.Body>
      <strong>2011-2015</strong> <br/>
       Started with Airticketing and then engaged into the Accounting and billing the customers.
        
      </Accordion.Body>
    </Accordion.Item>
    <br/>
    <Accordion.Item eventKey="3">
      <Accordion.Header>Northshore Youth & Family Services - A Non Profit Firm</Accordion.Header>
      <Accordion.Body>
       <strong>April-2019 to Current</strong> <br/>
       Works as a Bookkeeper. Duties includes managing the payroll, pay all the bills, record all the day to day transactions, preparing the invoices for the grants. 
      </Accordion.Body>
    </Accordion.Item>
    <br/>
    <Accordion.Item eventKey="4">
      <Accordion.Header>Volunteer Work</Accordion.Header>
      <Accordion.Body>
       <strong>Gurukul</strong> <br/>
       Volunteered as Lead Parent Volunteer, helped the teachers with the events and parent teacher's meeting <br/>
       <strong>Northshore School District</strong> <br/>
       Volunteered to help the class teacher to organize the events and helping students in reading program.
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  </div>
  )
}

export default Workex