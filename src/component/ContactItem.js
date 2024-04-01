import React from 'react'
import {Row, Col} from 'react-bootstrap';

const ContactItem = () => {
  return (
    <Row>
      <Col lg={1}>
        <img width={50} src="https://wplaboratory.in/wplabadmin/Login_logo.png"/>
      </Col>
      <Col lg={9}>
      <div>
        오승택
      </div>
      <div>
        010-1231-1231
      </div>
      </Col>
    </Row>
  )
}

export default ContactItem
