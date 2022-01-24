import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container,Row, Col, NavDropdown, Form, Button,Modal, FormControl, Offcanvas } from 'react-bootstrap';
import { LinkContainer, Link } from 'react-router-bootstrap'
import SearchBox from './SearchBox'
import { useHistory, useLocation } from 'react-router-dom'
import { logout } from '../actions/userActions'

function Header({ history, match }) {
     
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()
  
  const [smShow, setSmShow] = useState(false);
    
  const logoutHandler = () => {
    dispatch(logout())
  }
  
 
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  const [showSearch, setShowSearch] = useState(false);

  const handleCloseSearch = () => setShowSearch(false);
  const handleShowSearch = () => setShowSearch(true);

    return (
        <div>
           <header>
           <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"#00d5ff00", zIndex:"100", color:"white"}}>
  <Container className="desktop-navbar">
  <LinkContainer style={{fontFamily: "Playfair Display, serif"}} to='/'>
  <Navbar.Brand  style={{fontFamily: "Playfair Display, serif"}}>KLARIN JAMES<br></br><p style={{fontSize:"12px",fontFamily: "Noto Serif Display, serif", fontWeight:"100", textAlign:"center"}}>WEST</p></Navbar.Brand>
  </LinkContainer>
  
    <Nav className="me-auto">
      
      <NavDropdown title="Women" id="basic-nav-dropdown"   style={{position:"static"}}>
      <Row style={{backgroundColor:"white", padding:"20px"}}>
            <Col  style={{ width:"300px"}}>
              <img className="d-block w-100" style={{height:"225px", width:"200px", padding:"10px"}} src="images\green-by-sea.jpg"/>
              <img className="d-block w-100" style={{height:"225px", width:"200px", padding:"10px"}} src="images\brown-strap-coat.jpg"/>
              </Col>
            <Col  style={{ width:"200px"}}>
            
            
         
            <NavDropdown.Item className="desktop-dropdown" style={{fontWeight:"bold"}}>Dresses</NavDropdown.Item>
         
            <LinkContainer  to="/category/Day_Dresses" style={{color:"black"}}>
            <NavDropdown.Item className="desktop-dropdown" >Day Dresses</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/category/Event_Dresses" style={{color:"black"}}>
            <NavDropdown.Item className="desktop-dropdown" >Event Dresses</NavDropdown.Item>
            </LinkContainer>
          
          <LinkContainer to="/category/Fitted_Dresses" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" >Fitted Dresses</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Loose_Dresses" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" >Loose Dresses</NavDropdown.Item>
          </LinkContainer>
          
          
          <NavDropdown.Divider />
          <NavDropdown.Item className="desktop-dropdown" style={{fontWeight:"bold"}}>Tops & Blouses</NavDropdown.Item>
          <LinkContainer to="/category/Knit_Tops_and_Tees" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown"  >Knit Tops & Tees</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Blouses_and_Shirts" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" >Blouses & Shirts</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Sweaters_and_Cardigans" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" >Sweaters & Cardigans</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Floral_Tops_and_Blouses" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" >Floral Tops & Blouses</NavDropdown.Item>
          </LinkContainer>
          </Col>
            <Col  style={{ width:"200px"}}>
            <NavDropdown.Item className="desktop-dropdown" style={{fontWeight:"bold"}}>Hats</NavDropdown.Item>
            <LinkContainer to="/category/Event_Hats" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown"  >Event Hats</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Wedding_Hats" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" >Wedding Hats</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Summer_Hats" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" >Summer Hats</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Floral_Hats" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" >Floral Hats</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <NavDropdown.Item className="desktop-dropdown" style={{fontWeight:"bold"}}>Jeans</NavDropdown.Item>
          <LinkContainer to="/category/Skinny_Jeans" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown"  >Skinny Jeans</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Loose_Jeans" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" >Loose Jeans</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/High_Rise_Jeans" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" >High Rise Jeans</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Straight_Mid-Rise_Jean" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" >Straight Mid-Rise Jean</NavDropdown.Item>
          </LinkContainer>
            </Col>
            <Col  style={{ width:"200px"}}>
            <NavDropdown.Item className="desktop-dropdown" style={{fontWeight:"bold"}}>Sweater</NavDropdown.Item>
            <LinkContainer to="/category/Cable_Knit_Sweater" style={{color:"black"}}>
              <NavDropdown.Item className="desktop-dropdown"  >Cable Knit Sweater</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/Woolen_Sweater" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" >Woolen Sweater</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Full_Zip_Sweater" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" >Full Zip Sweater</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Patterned_Sweater" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" >Patterned Sweater</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <NavDropdown.Item className="desktop-dropdown" style={{fontWeight:"bold"}}>Jacket & Coats</NavDropdown.Item>
          <LinkContainer to="/category/Leather_Jackets" style={{color:"black"}}>
              <NavDropdown.Item className="desktop-dropdown"  >Leather Jackets</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/Draped_Collar_Trench_Coat" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" >Draped Collar Trench Coat</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Denim_Jacket" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" >Denim Jacket</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Tweed_Jacket" style={{color:"black"}}>
            <NavDropdown.Item className="desktop-dropdown" >Tweed Jacket</NavDropdown.Item>
            </LinkContainer>
            </Col>
            <Col  style={{ width:"200px"}}>
            <img className="d-block w-100" style={{height:"450px", width:"200px", padding:"10px"}} src={'https://euwestzaragreta-bucket.s3.eu-west-1.amazonaws.com/winter-red-1.jpg'}/>
            </Col>
          </Row>
        </NavDropdown>
        <NavDropdown title="Men" id="basic-nav-dropdown"   style={{position:"static"}}>
      <Row style={{backgroundColor:"white", padding:"20px"}}>
            <Col  style={{ width:"300px"}}>
              <img className="d-block w-100" style={{height:"225px", width:"200px", padding:"10px"}} src={'https://euwestzaragreta-bucket.s3.eu-west-1.amazonaws.com/man-brown-coat.jpeg'}/>
              <img className="d-block w-100" style={{height:"225px", width:"200px", padding:"10px"}} src={'https://euwestzaragreta-bucket.s3.eu-west-1.amazonaws.com/grey-mens-jeans.jpeg'}/>
              </Col>
            <Col  style={{ width:"200px"}}>
            
            
         
            <NavDropdown.Item className="desktop-dropdown" style={{fontWeight:"bold"}}>Popular</NavDropdown.Item>
         
            <LinkContainer to="/category/Mens_Jumpers" style={{color:"black"}}>
            <NavDropdown.Item className="desktop-dropdown" >Jumpers</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/category/Mens_Cardigans" style={{color:"black"}}>
            <NavDropdown.Item className="desktop-dropdown" >Cardigans</NavDropdown.Item>
            </LinkContainer>
          
          <LinkContainer to="/category/Mens_Hoodies" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" >Hoodies</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Mens_T-Shirts" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" >T-Shirts</NavDropdown.Item>
          </LinkContainer>
          
          
          <NavDropdown.Divider />
          <NavDropdown.Item className="desktop-dropdown" style={{fontWeight:"bold"}}>Suits, Shirts & Pants</NavDropdown.Item>
          <LinkContainer to="/category/Mens_Blazers" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown"  href="#action/3.1">Blazers</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer  to="/category/Mens_Three_piece_suit" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.2">Three piece suit</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Mens_Formal_Shirts" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Formal Shirts</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Mens_Pants" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Pants</NavDropdown.Item>
          </LinkContainer>
          </Col>
            <Col  style={{ width:"200px"}}>
            <NavDropdown.Item className="desktop-dropdown" style={{fontWeight:"bold"}}>Hats & Caps</NavDropdown.Item>
            <LinkContainer to="/category/Mens_Hats" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown"  href="#action/3.1">Hats</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Mens_Summer_Caps" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.2">Summer Caps</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Mens_Golf_Caps" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Golf Caps</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Winter_Caps" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Winter Caps</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <NavDropdown.Item className="desktop-dropdown" style={{fontWeight:"bold"}}>Jeans</NavDropdown.Item>
          <LinkContainer to="/category/Mens_Skinny_Jeans" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown"  href="#action/3.1">Skinny Jeans</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Mens_Loose_Jeans" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.2">Loose Jeans</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Mens_Slim_Fit_Jeans" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Slim Fit Jeans</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Mens_Straight_Fit_Jeans" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Straight Fit Jeans</NavDropdown.Item>
          </LinkContainer>
            </Col>
            <Col  style={{ width:"200px"}}>
            <NavDropdown.Item className="desktop-dropdown" style={{fontWeight:"bold"}}>Sweater</NavDropdown.Item>
            <LinkContainer to="/category/Mens_Cable_Knit_Sweater" style={{color:"black"}}>
              <NavDropdown.Item className="desktop-dropdown"  href="#action/3.1">Cable Knit Sweater</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/Mens_Woolen_Sweater" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.2">Woolen Sweater</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Mens_Full_Zip_Sweater" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Full Zip Sweater</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Mens_Patterned_Sweater" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Patterned Sweater</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <NavDropdown.Item className="desktop-dropdown" style={{fontWeight:"bold"}}>Jacket & Coats</NavDropdown.Item>
          <LinkContainer to="/category/Mens_Leather_Jackets" style={{color:"black"}}>
              <NavDropdown.Item className="desktop-dropdown"  href="#action/3.1">Leather Jackets</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/Mens_Draped_Collar_Trench_Coat" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.2">Draped Collar Trench Coat</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Mens_Denim_Jacket" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Denim Jacket</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Mens_Tweed_Jacket" style={{color:"black"}}>
            <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Tweed Jacket</NavDropdown.Item>
            </LinkContainer>
            </Col>
            <Col  style={{ width:"200px"}}>
            <img className="d-block w-100" style={{height:"450px", width:"200px", padding:"10px"}} src={'https://euwestzaragreta-bucket.s3.eu-west-1.amazonaws.com/brown-coat-2.jpeg'}/>
            </Col>
          </Row>
        </NavDropdown>
      
        <NavDropdown title="Fragrance" id="basic-nav-dropdown" style={{position:"static"}}>
        <Row style={{backgroundColor:"white", padding:"20px"}}>
            <Col  style={{ width:"300px"}}>
              <img className="d-block w-100" style={{height:"225px", width:"200px", padding:"10px"}} src={'https://euwestzaragreta-bucket.s3.eu-west-1.amazonaws.com/rose-perfume.jpeg'}/>
              <img className="d-block w-100" style={{height:"225px", width:"200px", padding:"10px"}} src={'https://euwestzaragreta-bucket.s3.eu-west-1.amazonaws.com/mens-classic-perfume.jpeg'}/>
              </Col>
              <Col  style={{ width:"200px"}}>
              <NavDropdown.Item className="desktop-dropdown" style={{fontWeight:"bold"}}>Womens Fragrance</NavDropdown.Item>
         
         <LinkContainer to="/category/Rose_Lavender" style={{color:"black"}}>
         <NavDropdown.Item className="desktop-dropdown" >Rose and Lavender</NavDropdown.Item>
         </LinkContainer>
         <LinkContainer to="/category/Summer_Flowers" style={{color:"black"}}>
         <NavDropdown.Item className="desktop-dropdown" >Summer Flowers</NavDropdown.Item>
         </LinkContainer>
       
       <LinkContainer to="/category/Wild" style={{color:"black"}}>
       <NavDropdown.Item className="desktop-dropdown" >Wild</NavDropdown.Item>
       </LinkContainer>
       <LinkContainer to="/category/Classic" style={{color:"black"}}>
       <NavDropdown.Item className="desktop-dropdown" >Classic</NavDropdown.Item>
       </LinkContainer>
       
       
       <NavDropdown.Divider />
       <NavDropdown.Item className="desktop-dropdown" style={{fontWeight:"bold"}}>Mens Fragrance</NavDropdown.Item>
       <LinkContainer to="/category/Mens_Intense" style={{color:"black"}}>
       <NavDropdown.Item className="desktop-dropdown"  href="#action/3.1">Intense</NavDropdown.Item>
       </LinkContainer>
       <LinkContainer to="/category/Mens_Summer_Madness" style={{color:"black"}}>
       <NavDropdown.Item className="desktop-dropdown" href="#action/3.2">Summer Madness</NavDropdown.Item>
       </LinkContainer>
       <LinkContainer to="/category/Mens_Wild" style={{color:"black"}}>
       <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Wild</NavDropdown.Item>
       </LinkContainer>
       <LinkContainer to="/category/Mens_Classic" style={{color:"black"}}>
       <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Classic</NavDropdown.Item>
       </LinkContainer>
       </Col>
            
            <Col  style={{ width:"200px"}}>
            <img className="d-block w-100" style={{height:"450px", width:"200px", padding:"10px"}} src={'https://euwestzaragreta-bucket.s3.eu-west-1.amazonaws.com/sea-perfume.jpeg'}/>
            </Col>
          </Row>
            
          
        </NavDropdown>
        
    </Nav>
    <Nav>
    
      <Nav.Link onClick={handleShow} ><i class="fa-solid fa-magnifying-glass"></i></Nav.Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Search Product</Modal.Title>
        </Modal.Header>
        <Modal.Body><SearchBox className="ml-auto" /> </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" style={{backgroundColor:"blueviolet"}} onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
      {userInfo ? (
                    <NavDropdown title={userInfo.name} id='username' className="username-nav" > 
                      <LinkContainer to='/profile' >
                        <NavDropdown.Item className="mobile-profile-nav" style={{color:"white"}}>
                            Profile <i class="fa fa-user" aria-hidden="true" ></i>
                        </NavDropdown.Item>
                      </LinkContainer>
                    <NavDropdown.Item className="mobile-profile-nav" style={{color:"white"}}>
                            Logout ◉
                        </NavDropdown.Item>
                    </NavDropdown>
                  ):(
                  
                <LinkContainer style={{fontSize:"13px"}} to='/login'>
                  <Nav.Link >
                      <i class="fa-regular fa-user" style={{fontSize:"18px"}}></i>
                  </Nav.Link>
                </LinkContainer>)}
      
      <LinkContainer  title="Cart" to='/cart' style={{marginTop:"-0.1px"}}>
                      <Nav.Link ><i class="fa-solid fa-basket-shopping" style={{fontSize:"18px"}}></i></Nav.Link>
                  </LinkContainer>
      
    </Nav>
    </Container>


  <Navbar bg="light" expand={false}>
  <Container  fluid>
  <LinkContainer style={{fontFamily: "Playfair Display, serif"}} to='/'>
  <Navbar.Brand  className="mobile-brand"style={{fontFamily: "Playfair Display, serif"}}>KLARIN JAMES<br></br><p style={{fontSize:"12px",fontFamily: "Noto Serif Display, serif", fontWeight:"100", textAlign:"center"}}>WEST</p></Navbar.Brand>
  </LinkContainer>
    <Navbar.Toggle style={{marginLeft: "120px"}} aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"  style={{width: "80%"}}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel" style={{color:"black", fontFamily: "Playfair Display, serif"}}>KLARIN JAMES<br></br><p style={{fontSize:"12px",fontFamily: "Noto Serif Display, serif", fontWeight:"100", textAlign:"center"}}>WEST</p></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end ">
        <NavDropdown title="Women" id="basic-nav-dropdown" >
        
        <NavDropdown.Item className="desktop-dropdown" style={{fontWeight:"bold"}}>Dresses</NavDropdown.Item>
         
         <LinkContainer to="/category/Day_Dresses" style={{color:"black"}}>
         <NavDropdown.Item className="desktop-dropdown" >Day Dresses</NavDropdown.Item>
         </LinkContainer>
         <LinkContainer to="/category/Event_Dresses" style={{color:"black"}}>
         <NavDropdown.Item className="desktop-dropdown" >Event Dresses</NavDropdown.Item>
         </LinkContainer>
       
       <LinkContainer to="/Fitted_Dresses" style={{color:"black"}}>
       <NavDropdown.Item className="desktop-dropdown" >Fitted Dresses</NavDropdown.Item>
       </LinkContainer>
       <LinkContainer to="/category/Loose_Dresses" style={{color:"black"}}>
       <NavDropdown.Item className="desktop-dropdown" >Loose Dresses</NavDropdown.Item>
       </LinkContainer>
       
       
       <NavDropdown.Divider />
       <NavDropdown.Item className="desktop-dropdown" style={{fontWeight:"bold"}}>Tops & Blouses</NavDropdown.Item>
       <LinkContainer to="/category/Knit_Tops_and_Tees" style={{color:"black"}}>
       <NavDropdown.Item className="desktop-dropdown"  href="#action/3.1">Knit Tops & Tees</NavDropdown.Item>
       </LinkContainer>
       <LinkContainer to="/category/Blouses_and_Shirts" style={{color:"black"}}>
       <NavDropdown.Item className="desktop-dropdown" href="#action/3.2">Blouses & Shirts</NavDropdown.Item>
       </LinkContainer>
       <LinkContainer to="/category/Sweaters_and_Cardigans" style={{color:"black"}}>
       <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Sweaters & Cardigans</NavDropdown.Item>
       </LinkContainer>
       <LinkContainer to="/category/Floral_Tops_and_Blouses" style={{color:"black"}}>
       <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Floral Tops & Blouses</NavDropdown.Item>
       </LinkContainer>

       <NavDropdown.Divider />
       <NavDropdown.Item className="desktop-dropdown" style={{fontWeight:"bold"}}>Hats</NavDropdown.Item>
            <LinkContainer to="/category/Event_Hats" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown"  href="#action/3.1">Event Hats</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Wedding_Hats" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.2">Wedding Hats</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Summer_Hats" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Summer Hats</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Floral_Hats" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Floral Hats</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <NavDropdown.Item className="desktop-dropdown" style={{fontWeight:"bold"}}>Jeans</NavDropdown.Item>
          <LinkContainer to="/category/Skinny_Jeans" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown"  href="#action/3.1">Skinny Jeans</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Loose_Jeans" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.2">Loose Jeans</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/High_Rise_Jeans" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">High Rise Jeans</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Straight_Mid-Rise_Jean" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Straight Mid-Rise Jean</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Item className="desktop-dropdown" style={{fontWeight:"bold"}}>Sweater</NavDropdown.Item>
            <LinkContainer to="/category/Cable_Knit_Sweater" style={{color:"black"}}>
              <NavDropdown.Item className="desktop-dropdown"  href="#action/3.1">Cable Knit Sweater</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/Woolen_Sweater" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.2">Woolen Sweater</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Full_Zip_Sweater" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Full Zip Sweater</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Patterned_Sweater" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Patterned Sweater</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <NavDropdown.Item className="desktop-dropdown" style={{fontWeight:"bold"}}>Jacket & Coats</NavDropdown.Item>
          <LinkContainer to="/category/Leather_Jackets" style={{color:"black"}}>
              <NavDropdown.Item className="desktop-dropdown"  href="#action/3.1">Leather Jackets</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/Draped_Collar_Trench_Coat" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.2">Draped Collar Trench Coat</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Denim_Jacket" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Denim Jacket</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Tweed_Jacket" style={{color:"black"}}>
            <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Tweed Jacket</NavDropdown.Item>
            </LinkContainer>
        </NavDropdown> 
        <NavDropdown title="Men" id="basic-nav-dropdown" >
          
        <NavDropdown.Item className="desktop-dropdown" style={{fontWeight:"bold"}}>Dresses</NavDropdown.Item>
         
         <LinkContainer to="/category/Mens_Jumpers" style={{color:"black"}}>
         <NavDropdown.Item className="desktop-dropdown" >Jumpers</NavDropdown.Item>
         </LinkContainer>
         <LinkContainer to="/category/Mens_Cardigans" style={{color:"black"}}>
         <NavDropdown.Item className="desktop-dropdown" >Cardigans</NavDropdown.Item>
         </LinkContainer>
       
       <LinkContainer to="/Mens_Hoodies" style={{color:"black"}}>
       <NavDropdown.Item className="desktop-dropdown" >Hoodies</NavDropdown.Item>
       </LinkContainer>
       <LinkContainer to="/category/Mens_T-Shirts" style={{color:"black"}}>
       <NavDropdown.Item className="desktop-dropdown" >T-Shirts</NavDropdown.Item>
       </LinkContainer>
       <NavDropdown.Divider />
          <NavDropdown.Item className="desktop-dropdown" style={{fontWeight:"bold"}}>Suits, Shirts & Pants</NavDropdown.Item>
          <LinkContainer to="/category/Mens_Blazers" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown"  href="#action/3.1">Blazers</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Mens_Three_piece_suit" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.2">Three piece suit</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Mens_Formal_Shirts" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Formal Shirts</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Mens_Pants" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Pants</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <NavDropdown.Item className="desktop-dropdown" style={{fontWeight:"bold"}}>Hats & Caps</NavDropdown.Item>
            <LinkContainer to="/category/Mens_Hats" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown"  href="#action/3.1">Hats</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Mens_Summer_Caps" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.2">Summer Caps</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Mens_Golf_Caps" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Golf Caps</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Winter_Caps" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Winter Caps</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <NavDropdown.Item className="desktop-dropdown" style={{fontWeight:"bold"}}>Jeans</NavDropdown.Item>
          <LinkContainer to="/category/Mens_Skinny_Jeans" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown"  href="#action/3.1">Skinny Jeans</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Mens_Loose_Jeans" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.2">Loose Jeans</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Mens_Slim_Fit_Jeans" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Slim Fit Jeans</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Mens_Straight_Fit_Jeans" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Straight Fit Jeans</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Item className="desktop-dropdown" style={{fontWeight:"bold"}}>Sweater</NavDropdown.Item>
            <LinkContainer to="/category/Mens_Cable_Knit_Sweater" style={{color:"black"}}>
              <NavDropdown.Item className="desktop-dropdown"  href="#action/3.1">Cable Knit Sweater</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/Mens_Woolen_Sweater" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.2">Woolen Sweater</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Mens_Full_Zip_Sweater" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Full Zip Sweater</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Mens_Patterned_Sweater" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Patterned Sweater</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <NavDropdown.Item className="desktop-dropdown" style={{fontWeight:"bold"}}>Jacket & Coats</NavDropdown.Item>
          <LinkContainer to="/category/Mens_Leather_Jackets" style={{color:"black"}}>
              <NavDropdown.Item className="desktop-dropdown"  href="#action/3.1">Leather Jackets</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category/Mens_Draped_Collar_Trench_Coat" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.2">Draped Collar Trench Coat</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Mens_Denim_Jacket" style={{color:"black"}}>
          <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Denim Jacket</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/Mens_Tweed_Jacket" style={{color:"black"}}>
            <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Tweed Jacket</NavDropdown.Item>
            </LinkContainer>
        </NavDropdown> 

        <NavDropdown title="Fragrance" id="basic-nav-dropdown" > 
        <NavDropdown.Item className="desktop-dropdown" style={{fontWeight:"bold"}}>Womens Fragrance</NavDropdown.Item>
         
         <LinkContainer to="/category/Rose_Lavender" style={{color:"black"}}>
         <NavDropdown.Item className="desktop-dropdown" >Rose and Lavender</NavDropdown.Item>
         </LinkContainer>
         <LinkContainer to="/category/Summer_Flowers" style={{color:"black"}}>
         <NavDropdown.Item className="desktop-dropdown" >Summer Flowers</NavDropdown.Item>
         </LinkContainer>
       
       <LinkContainer to="/category/Wild" style={{color:"black"}}>
       <NavDropdown.Item className="desktop-dropdown" >Wild</NavDropdown.Item>
       </LinkContainer>
       <LinkContainer to="/category/Classic" style={{color:"black"}}>
       <NavDropdown.Item className="desktop-dropdown" >Classic</NavDropdown.Item>
       </LinkContainer>
       
       
       <NavDropdown.Divider />
       <NavDropdown.Item className="desktop-dropdown" style={{fontWeight:"bold"}}>Mens Fragrance</NavDropdown.Item>
       <LinkContainer to="/category/Mens_Intense" style={{color:"black"}}>
       <NavDropdown.Item className="desktop-dropdown"  href="#action/3.1">Intense</NavDropdown.Item>
       </LinkContainer>
       <LinkContainer to="/category/Mens_Summer_Madness" style={{color:"black"}}>
       <NavDropdown.Item className="desktop-dropdown" href="#action/3.2">Summer Madness</NavDropdown.Item>
       </LinkContainer>
       <LinkContainer to="/category/Mens_Wild" style={{color:"black"}}>
       <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Wild</NavDropdown.Item>
       </LinkContainer>
       <LinkContainer to="/category/Mens_Classic" style={{color:"black"}}>
       <NavDropdown.Item className="desktop-dropdown" href="#action/3.3">Classic</NavDropdown.Item>
       </LinkContainer>
       </NavDropdown> 
      
      
          
          
            
            <NavDropdown.Divider />
            
          <Nav.Link href="#deets"><i class="fa-regular fa-heart"></i></Nav.Link>
          {userInfo ? (
                    <NavDropdown title={userInfo.name} id='username' className="username-nav" > 
                      <LinkContainer to='/profile' >
                        <NavDropdown.Item className="mobile-profile-nav" style={{color:"white"}}>
                            Profile <i class="fa fa-user" aria-hidden="true" ></i>
                        </NavDropdown.Item>
                      </LinkContainer>
                    <NavDropdown.Item className="mobile-profile-nav" style={{color:"white"}}>
                            Logout ◉
                        </NavDropdown.Item>
                    </NavDropdown>
                  ):(
                  
                <LinkContainer style={{fontSize:"13px"}} to='/login'>
                  <Nav.Link >
                      <i class="fa-regular fa-user" style={{fontSize:"18px"}}></i>
                  </Nav.Link>
                </LinkContainer>)}

          
          <LinkContainer  title="Cart" to='/cart' style={{marginTop:"-0.1px"}}>
                      <Nav.Link ><i class="fa-solid fa-basket-shopping" style={{fontSize:"18px"}}></i></Nav.Link>
                  </LinkContainer>
            
        </Nav>
        <NavDropdown.Divider />
        <SearchBox className="ml-auto" />
        
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
  
</Navbar> 
           </header> 
        </div>
    )
}

export default Header