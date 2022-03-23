import React from 'react'
import {  Card } from "react-bootstrap";
import info from '../info'
   
const Info = () => {
  return (
    //   <Card>
    //  <Col>
    //     <Image className = 'img'  src={myInfo.image} />
    //          <h4>{myInfo.lines}</h4>
    //      </Col>  
    //     </Card>

    // <Card className = 'my-3 p-3 rounded'>
       
    //         <Card.Img src = {myInfo.image} variant = 'top' />
    //          <Card.Body>
    //                <Card.Title as='div'>
    //             <strong>{myInfo.lines}</strong>
    //             </Card.Title>
    //            {/* <Card.Text as = 'h3'>${product.price}</Card.Text>    */}
    //     </Card.Body>
        
    //     </Card>

    <Card className = 'my-3 p-3 rounded'>
       
            <Card.Img src = {info.image} variant = 'top' />
             <Card.Body>
                   <Card.Title as='div'>
                <strong>{info.lines}</strong>
                </Card.Title>
               {/* <Card.Text as = 'h3'>${product.price}</Card.Text>    */}
        </Card.Body>
        
        </Card>
  )
}

export default Info