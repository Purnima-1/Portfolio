import React from 'react'
import {  Card } from "react-bootstrap";

const Links = () => {
  return (
    <Card className = 'my-3 p-3 rounded'>
       
            
             <Card.Body>
                
                <Card.Title as='div'>
                
                <h4 style={{color: 'orange'}}>About me: </h4>
                <h5>I am enthusiastic, energetic and a strong believer in loving what I do. I am a detail oriented person and exceptionally organized. Other then coding, I like hiking, cooking and listening to music.</h5><hr/>
                <h4 style={{color: 'orange'}}>Courses and Training: </h4>
                <h5>Full Stack Web Development Course from Kal Academy, Redmond</h5>
                <h5>Lynda.com</h5> 
                <h5>Traversy Media</h5> 
                <h5>Free Code Camp</h5> <hr/>
                <h4  style={{color: 'orange'}}>Skills: </h4>
                <h5>JavaScript</h5>
                <h5>React JS</h5>
                <h5>Angular</h5>
                <h5>Node JS</h5>
                <h5>MongoDB</h5>
                </Card.Title>
               {/* <Card.Text as = 'h3'>${product.price}</Card.Text>    */}
        </Card.Body>
        
        </Card>
  )
}

export default Links