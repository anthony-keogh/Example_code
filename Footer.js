import React from 'react'
import { Container, Row, Col, Nav, Form, Button } from 'react-bootstrap'
import { LinkContainer, Link } from 'react-router-bootstrap'

function Footer() {
    return (
        
          <footer style={{backgroundColor:"black"}}>
            <Container>
              <Nav defaultActiveKey="/home" as="ul" className="justify-content-center">
                <Nav.Item as="li" className="my-3 footer-links">
                  
                  <br></br>
                  <LinkContainer to='/profile' >
                      <Nav.Link  className="footer-link-pink">Account</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to='/profile' >
                      <Nav.Link className="footer-link">Your Profile</Nav.Link>
                      </LinkContainer >
                      <LinkContainer  to='/login'>
                      <Nav.Link  className="footer-link">Login</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/register">
                      <Nav.Link  className="footer-link">Sign Up</Nav.Link>
                      </LinkContainer >
                </Nav.Item>
                <Nav.Item as="li" className="my-3 footer-links">
                  
                    <br></br>
                    <Nav.Link  className="footer-link-pink">Information</Nav.Link>
                      <Nav.Link  className="footer-link">About Us</Nav.Link>
                    
                      <Nav.Link  className="footer-link">Terms of Use</Nav.Link>
                    
                      <Nav.Link  className="footer-link">Returns Policy</Nav.Link>
                    
                </Nav.Item>
                <Nav.Item as="li" className="my-3 footer-links">
                  
                    <br></br>
                    <Nav.Link  className="footer-link-pink">Help</Nav.Link>
                      <Nav.Link  className="footer-link">Contact Us</Nav.Link>
                    
                    
                      <Nav.Link  className="footer-link">Help Center / FAQs</Nav.Link>
                    
                    
                      <Nav.Link  className="footer-link">Gift Cards</Nav.Link>
                    
                </Nav.Item>
                <Nav.Item as="li" className="my-3 footer-links">
                  
                    <br></br>
                    <Nav.Link  className="footer-link-pink">Social</Nav.Link>
                      <Nav.Link to="/home" className="footer-link">Instagram</Nav.Link>
                    
                      <Nav.Link to="/home" className="footer-link">Facebook</Nav.Link>
                    
                      <Nav.Link to="/home" className="footer-link">YouTube</Nav.Link>
                    
                </Nav.Item>
                <Nav.Item as="li" className="my-3 footer-links">
                
                  <p className="subcribe-p" >SUBSCRIBE TO OUR NEWSLETTER</p>
                    <Form>
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                        <Button variant="primary"style={{backgroundColor:"rgb(227, 105, 116)"}} type="submit">Subscribe
                        </Button>
                      </Form>
                      
                </Nav.Item>
              </Nav>
              
              <Row>
                <Col className="text-center py-3" style={{color:"white"}}>Secure payment method by 
                  <span style={{color:"white", fontWeight:"bold"}}> Stripe</span>
                </Col>
              </Row>
    
              <Row>
                <Col className="text-center py-3" style={{color:"white"}}>CopyRight &copy; KLARIN JAMES WEST
                </Col>
              </Row>
            </Container>
          </footer>  
        
    )
}

export default Footer