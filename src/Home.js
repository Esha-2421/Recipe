import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Home = () => {
  return (
    // <Container>
    //   <Row className='toparea'>
    //     <Col md-6 md-12 className='toparea1'>Pinch of Yum</Col>
    //     <Col md-6 md-12>
    //         <ul>
    //             <li>Home</li>
    //             <li>About</li>
    //             <li>Contact</li>
    //         </ul>
    //     </Col>
    //   </Row>
    // </Container>
    
    <header className="toparea">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-12">
                    This Site updated on : December 04, 2023
                </div>
                <div className="col-md-6 col-12">
                    <a href="mailto:gpa20102rediffmail.com"><i className="fa fa-envelope"></i>&nbsp;gpa2010@rediffmail.com</a>
                </div>
            </div>
        </div>
    </header>

  )
}

export default Home
