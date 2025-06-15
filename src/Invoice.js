import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Invoice.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Invoice = () => {
  return (
        
    <Container>
        <Row className='invoice'>
            <Col md={6} className='heading'>
                <h3>Enter details to make your first Sale 🚀</h3>
                <p className='para'>First sale is made in less than a minute on Vyapar</p>
                <Form>
                    <Row>
                        <Col md={6}>
                            <p><FontAwesomeIcon icon="fa-duotone fa-regular fa-file-invoice" /></p>
                        </Col>
                        <Col md={6}></Col>
                    </Row>
                </Form>
            </Col>
            <Col md={6}></Col>
        </Row>
    </Container>
  )
}

export default Invoice
