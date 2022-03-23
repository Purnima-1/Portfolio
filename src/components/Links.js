import React from 'react'
import {  Card } from "react-bootstrap";

const Links = () => {
  return (
    <Card className = 'my-3 p-3 rounded'>
       
            
             <Card.Body>
                   <Card.Title as='div'>
                {/* <strong>{myInfo.workex}</strong> */}
                <strong>Work Experience</strong>
               
                </Card.Title>
                <Card.Title as='div'>
                {/* <strong>{myInfo.linkedIn}</strong> */}
                
                <strong>Link to my LinkedIn</strong>
                </Card.Title>
               {/* <Card.Text as = 'h3'>${product.price}</Card.Text>    */}
        </Card.Body>
        
        </Card>
  )
}

export default Links