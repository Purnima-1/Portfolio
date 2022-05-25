import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Info from './Info'
import Links from './Links'

const LeftScreen = () => {
  return (
    <>
    <Row>
    {/* {info.map((myInfo) => (
        <Col key={myInfo._id} sm={12} md={6} lg={4} xl={3}>
            <Info myInfo = {myInfo} />
           
              <Links myInfo = {myInfo}/>
            </Col>
    ))} */}
<Col sm={12} md={4} lg={3} xl={4}>
            <Info />
</Col>
<Col sm={12} md={8} lg={9} xl={8}>
  <Links/>
</Col>
    </Row>
    </>
  )
}

export default LeftScreen