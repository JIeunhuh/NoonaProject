import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const ContactItem = ({item}) => {
  return (
    <Row className='my-2'>
        <Col lg={2}>
        <img 
        width={100}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lM1gneDb--b-0JOtLxECBo-WCSODa17fEEnbT4365_cp_LML4T9F8ZohzOQV4CMSK5k&usqp=CAU' alt='person'/>
        </Col>
        <Col lg={10}>
            <div>{item.name}</div>
            <div>{item.num}</div>
        </Col>
    </Row>
  )
}
