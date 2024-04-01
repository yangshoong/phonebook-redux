import React from 'react'
import { Row, Col } from 'react-bootstrap';

const ContactItem = ({ item }) => {
  return (
    <Row className='contact-item'>
      <Col lg={1}>
        <img width={50} src="https://st4.depositphotos.com/7752738/22685/v/450/depositphotos_226857182-stock-illustration-user-icon-vector-line-outline.jpg" alt='' />
      </Col>
      <Col lg={9}>
        <div className='contact-info'>
          {item.name}
        </div>
        <div className='contact-info'>
          {item.phoneNumber}
        </div>
      </Col>
    </Row>
  )
}

export default ContactItem
