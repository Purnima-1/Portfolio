import React from 'react'
import { Card } from 'react-bootstrap'
import {Form,Button} from 'react-bootstrap'
import '../App.css'
import emailjs from 'emailjs-com'
function sendEmail(e){
  e.preventDefault();

  emailjs.sendForm('gmail', 'template_udpr6vn', e.target, 'yfYOljbOxHsooJqnW')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
}

const Contact = () => {
  return (
    <>
   
   <br />
     <Card className="contact" style={{backgroundColor:'black'}} >
    <Card.Body>
      <Card.Text>
        
      <p> Email: baranwal.purnima@gmail.com </p><br/>
      <p>Phone number: 602 561 4197</p><br/>
      <p>Address: Bothell, WA, USA </p><br/>
      
      <p className = 'link'>LinkedIn: <a href="https://www.linkedin.com/in/purnima-kumar-3977678/" target="_blank" rel="noreferrer">Click here</a> </p>
      </Card.Text>
    </Card.Body>
  </Card>
  <Form onSubmit={sendEmail} >
  <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Your Email</Form.Label>
    <Form.Control type="email" placeholder="Your email..." />
      </Form.Group>
  <Form.Group className="mb-3" controlId="text">
       <Form.Label>Send message</Form.Label>
    <Form.Control className="message" type="text" placeholder="Type your message here..." />
      </Form.Group>
  <Button variant="primary"  type="submit">
    Send
  </Button>
</Form>
  

</>
  )
}

export default Contact