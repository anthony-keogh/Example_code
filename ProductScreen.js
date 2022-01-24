import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form, Carousel, Nav, Container, Table, Modal } from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'

import Product from '../components/Product'
import { listProductDetails } from '../actions/productActions'
import { listOrders } from '../actions/orderActions'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


function ProductScreen({match, history}) {
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const {loading, error, product} = productDetails
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  
    const allSizeList = [{id : product.mens_womens_coat_size_xxs, name:"XXS"},
    {id : product.mens_womens_coat_size_xs, name:"XS"},
    {id : product.mens_womens_coat_size_s, name:"S"},
    {id : product.mens_womens_coat_size_m, name:"M"},
    {id : product.mens_womens_coat_size_l, name:"L"},
    {id : product.mens_womens_coat_size_xl, name:"XL"},
     {id : product.mens_womens_coat_size_xxl, name:"XXL"},
    {id : product.mens_jeans_EU28_30L, name:"Size:EU28/L30"},
    {id : product.mens_jeans_EU30_30L, name:"Size:EU30/L30"},
    {id : product.mens_jeans_EU32_30L, name:"Size:EU32/L30"},
    {id : product.mens_jeans_EU34_30L, name:"Size:EU34/L30"},
    {id : product.mens_jeans_EU36_30L, name:"Size:EU36/L30"},
    {id : product.mens_jeans_EU38_30L, name:"Size:EU38/L30"},
    {id : product.mens_jeans_EU40_30L, name:"Size:EU40/L30"}, 
    {id : product.mens_jeans_EU42_30L, name:"Size:EU42/L30"},
    {id : product.mens_jeans_EU28_32L, name:"Size:EU28/L32"},
    {id : product.mens_jeans_EU30_32L, name:"Size:EU30/L32"},
    {id : product.mens_jeans_EU32_32L, name:"Size:EU32/L32"},
    {id : product.mens_jeans_EU34_32L, name:"Size:EU34/L32"},
    {id : product.mens_jeans_EU36_32L, name:"Size:EU36/L32"},
    {id : product.mens_jeans_EU38_32L, name:"Size:EU38/L32"},
    {id : product.mens_jeans_EU40_32L, name:"Size:EU40/L32"},
    {id : product.mens_jeans_EU42_32L, name:"Size:EU42/L32"},
    {id : product.mens_jeans_EU28_34L, name:"Size:EU28/L34"},
    {id : product.mens_jeans_EU30_34L, name:"Size:EU30/L34"},
    {id : product.mens_jeans_EU32_34L, name:"Size:EU32/L34"},
    {id : product.mens_jeans_EU34_34L, name:"Size:EU34/L34"},
    {id : product.mens_jeans_EU36_34L, name:"Size:EU36/L34"},
    {id : product.mens_jeans_EU38_34L, name:"Size:EU38/L34"}, 
    {id : product.mens_jeans_EU40_34L, name:"Size:EU40/L34"}, 
    {id : product.mens_jeans_EU42_34L, name:"Size:EU42/L34"},
    {id : product.mens_blazers_EU44_short, name:"EU44/Short"},
    {id : product.mens_blazers_EU46_short, name:"EU46/Short"},
    {id : product.mens_blazers_EU48_short, name:"EU48/Short"},
    {id : product.mens_blazers_EU50_short, name:"EU50/Short"},
    {id : product.mens_blazers_EU52_short, name:"EU52/Short"},
    {id : product.mens_blazers_EU54_short, name:"EU54/Short"},
    {id : product.mens_blazers_EU56_short, name:"EU56/Short"},
    {id : product.mens_blazers_EU58_short, name:"EU58/Short"},
    {id : product.mens_blazers_EU60_short, name:"EU60/Short"},
    {id : product.mens_blazers_EU62_short, name:"EU62/Short"},
    {id : product.mens_blazers_EU64_short, name:"EU64/Short"},
    {id : product.mens_blazers_EU44_regular, name:"EU44/Regular"},
    {id : product.mens_blazers_EU46_regular, name:"EU46/Regular"},
    {id : product.mens_blazers_EU48_regular, name:"EU48/Regular"},
    {id : product.mens_blazers_EU50_regular, name:"EU50/Regular"},
    {id : product.mens_blazers_EU52_regular, name:"EU52/Regular"},
    {id : product.mens_blazers_EU54_regular, name:"EU54/Regular"},
    {id : product.mens_blazers_EU56_regular, name:"EU56/Regular"},
    {id : product.mens_blazers_EU58_regular, name:"EU58/Regular"},
    {id : product.mens_blazers_EU60_regular, name:"EU60/Regular"},
    {id : product.mens_blazers_EU62_regular, name:"EU62/Regular"},
    {id : product.mens_blazers_EU64_regular, name:"EU64/Regular"},
    {id : product.mens_blazers_EU44_long, name:"EU44/Long"},
    {id : product.mens_blazers_EU46_long, name:"EU46/Long"},
    {id : product.mens_blazers_EU48_long, name:"EU48/Long"},
    {id : product.mens_blazers_EU50_long, name:"EU50/Long"},
    {id : product.mens_blazers_EU52_long, name:"EU52/Long"},
    {id : product.mens_blazers_EU54_long, name:"EU54/Long"},
    {id : product.mens_blazers_EU56_long, name:"EU56/Long"},
    {id : product.mens_blazers_EU58_long, name:"EU58/Long"},
    {id : product.mens_blazers_EU60_long, name:"EU60/Long"},
    {id : product.mens_blazers_EU62_long, name:"EU62/Long"},
    {id : product.mens_blazers_EU64_long, name:"EU64/Long"},
    {id : product.womans_jeans_EU24_short, name:"EU24/Short"},
    {id : product.womans_jeans_EU25_short, name:"EU25/Short"},
    {id : product.womans_jeans_EU26_short, name:"EU26/Short"},
    {id : product.womans_jeans_EU27_short, name:"EU27/Short"},
    {id : product.womans_jeans_EU28_short, name:"EU28/Short"},
    {id : product.womans_jeans_EU29_short, name:"EU29/Short"},
    {id : product.womans_jeans_EU30_short, name:"EU30/Short"},
    {id : product.womans_jeans_EU31_short, name:"EU31/Short"},
    {id : product.womans_jeans_EU32_short, name:"EU32Short"},
    {id : product.womans_jeans_EU33_short, name:"EU33/Short"},
    {id : product.womans_jeans_EU34_short, name:"EU34/Short"},
    {id : product.womans_jeans_EU24_regular, name:"EU24/Regular"},
    {id : product.womans_jeans_EU25_regular, name:"EU25/Regular"},
    {id : product.womans_jeans_EU26_regular, name:"EU26/Regular"},
    {id : product.womans_jeans_EU27_regular, name:"EU27/Regular"},
    {id : product.womans_jeans_EU28_regular, name:"EU28/Regular"},
    {id : product.womans_jeans_EU29_regular, name:"EU29/Regular"},
    {id : product.womans_jeans_EU30_regular, name:"EU30/Regular"},
    {id : product.womans_jeans_EU31_regular, name:"EU31/Regular"},
    {id : product.womans_jeans_EU32_regular, name:"EU32/Regular"},
    {id : product.womans_jeans_EU33_regular, name:"EU33/Regular"},
    {id : product.womans_jeans_EU34_regular, name:"EU34/Regular"},
    {id : product.womans_blazers_UK2, name:"Size:UK 2"},
    {id : product.womans_blazers_UK4, name:"Size:UK 4"},
    {id : product.womans_blazers_UK6, name:"Size:UK 6"},
    {id : product.womans_blazers_UK8, name:"Size:UK 8"},
    {id : product.womans_blazers_UK10, name:"Size:UK 10"},
    {id : product.womans_blazers_UK12, name:"Size:UK 12"}, 
    {id : product.womans_blazers_UK14, name:"Size:UK 14"}, 
    {id : product.womans_blazers_UK16, name:"Size:UK 16"},
    {id : product.womans_blazers_UK18, name:"Size:UK 18"},
    {id : product.womens_mens_fragrance_50ml, name:"50ml"},
    {id : product.womens_mens_fragrance_50ml, name:"100ml"}
  ];

   
    const [size, setSize] = useState(0)
    
    const mens_womens_coat_size_list = allSizeList.map((x) =>  x.id > 0 ? <option style={{color:"red", fontWeight:"500"}}>{ x.name }</option>
    : 
   <option style={{color:"red", display:"none", fontWeight:"500"}}></option>

);
    

    useEffect(() => {
       dispatch(listProductDetails(match.params.id))
     
    },[dispatch, match])
    
    const addToCartHandler = () =>{
      
        history.push(`/cart/${match.params.id}?qty=${qty}`)
        
    }
    
    //const product = products.find((p) => p._id == match.params.id)
    return( 
        <div style={{backgroundColor:"white", marginTop:"70px"}}  >
          <Link to='/' className="btn btn-light my-3 homepage-btn" style={{marginLeft:"15px"}}>Back To Homepage</Link>
            {loading ?
              <Loader />
                : error
                  ? <Message variant='danger'>{error}</Message>
                    : (
                      <Row style={{padding:"15px"}}>
                        <Col md={6} lg={5} >
                          <Zoom>
                            <Image className="d-block w-100" src={product.image} alt={product.name} fluid />
                          </Zoom>
                          <Row>
                            <Col xs={2} md={2} lg={2} >
                              <Zoom>
                                <Image style={{height:"100px", padding:"5px"}} src={product.image} rounded />
                              </Zoom>
                            </Col>
                            <Col xs={2} md={2} lg={2} >
                              <Zoom>
                                <Image style={{height:"100px", padding:"5px"}} src={product.image} rounded />
                              </Zoom>
                            </Col>
                            <Col xs={2} md={2} lg={2} >
                              <Zoom>
                            <Image  style={{height:"100px", padding:"5px"}} src={product.image} rounded />
                              </Zoom>
                            </Col>
                            <Col xs={2} md={2} lg={2} >
                              <Zoom>
                                <Image style={{height:"100px", padding:"5px"}} src={product.image} rounded />
                              </Zoom>
                            </Col>
                            <Col xs={2} md={2} lg={2} >
                              <Zoom>
                                <Image  style={{height:"100px", padding:"5px"}} src={product.image} rounded />
                              </Zoom>
                            </Col>
                          </Row>
                        </Col>
                        <Col md={3} lg={4}>
                          <ListGroup variant="flush">
                            <ListGroup.Item>
                              <h4 style={{ color:"black"}}>{product.name}</h4>
                          </ListGroup.Item>
                            <ListGroup.Item style={{color:"black"}}>
                              <Rating  value={product.rating} text={`${product.numReviews} reviews`} color={'pink'} />
                            </ListGroup.Item>
                            <ListGroup.Item style={{ color:"black", fontSize:"15px", fontFamily:"arial"}}>
                              <span style={{fontWeight:'bold', color:"black", fontSize:"15px", fontFamily:"arial"}}>Product Detail</span> <br></br><p style={{fontSize:"15px", color:"black", fontFamily:"arial"}}>{product.description}<br></br><br></br><span style={{fontSize:"15px", fontWeight:'bold', color:"black", fontFamily:"arial"}}>Care Guide:</span><br></br>{product.description_care}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                            <ListGroup.Item style={{borderColor:"white"}}>
                              <p style={{fontWeight:"bold", marginLeft:"-20px", color:"black"}}>Pick a size</p>
                                <Form.Control as="select" className="sizeFormControl" style={{color:"black"}} value={size} 
                                  onChange={(e) => setSize(e.target.value)} 
                                  style={{marginLeft:"-20px"}}>
                                    <option>Choose your size</option>
                                    {mens_womens_coat_size_list}
                                </Form.Control>
                                  
                            </ListGroup.Item>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              <Button style={{backgroundColor:"white", borderColor:"white", color:"#c71ecf", textDecorationLine:"underline", fontWeight:"600"}} onClick={handleShow}>
                                Size guide
                              </Button>
                              <Modal show={show} onHide={handleClose} >
                                <Modal.Header style={{backgroundColor:"#6f0144"}}closeButton>
                                  <Modal.Title >Size Guide</Modal.Title>
                                </Modal.Header>
                                <Modal.Body style={{backgroundColor:"#6f0144"}}>
                                  <Table striped bordered hover>
                                    <thead>
                                      <tr>
                                        <th>Woman sizes</th>
                                          </tr>
                                    </thead>
                                      <tbody>
                                        <tr>
                                          <td>UK Size</td>
                                          <td>EU Size</td>
                                          <td>UK Size</td>
                                        </tr>
                                        <tr>
                                          <td>5</td>
                                          <td>28</td>
                                          
                                        </tr>
                                        <tr>
                                          <td>6</td>
                                          <td>30</td>
                                          
                                        </tr>
                                        <tr>
                                          <td>7</td>
                                          <td>32</td>
                                          
                                        </tr>
                                        <tr>
                                          <td>8</td>
                                          <td>34</td>
                                          
                                        </tr>
                                        <tr>
                                          <td>9</td>
                                          <td>36</td>
                                          
                                        </tr>
                                        <tr>
                                          <td>10</td>
                                          <td>38</td>
                                          
                                        </tr>
                                        <tr>
                                          <td>11</td>
                                          <td>40</td>
                                          
                                        </tr>
                                        <tr>
                                          <td>12</td>
                                          <td>42</td>
                                          
                                        </tr>
                                        <tr>
                                          <td>13</td>
                                          <td>44</td>
                                          
                                        </tr>
                                        <tr>
                                          <td>14</td>
                                          <td>46</td>
                                          
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </Modal.Body>
                                <Modal.Footer style={{backgroundColor:"#6f0144"}}>
          
         
        </Modal.Footer>
      </Modal>
          </ListGroup.Item>
            
              <br></br>
                <Nav className="mr-auto">
                  <Nav.Link href="/" style={{width:"50px"}}>
                    <ListGroup.Item style={{width:"50px", borderColor:"white"}}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="facebook">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                      </svg>
                    </ListGroup.Item>
                  </Nav.Link>
                  <Nav.Link href="/" style={{width:"50px"}}>
                    <ListGroup.Item style={{width:"50px", borderColor:"white"}}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="facebook">
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                      </svg>
                    </ListGroup.Item>
                  </Nav.Link>
                  <Nav.Link href="/" style={{width:"50px"}}>
                    <ListGroup.Item style={{width:"50px", borderColor:"white"}}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="facebook">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                    </ListGroup.Item>
                  </Nav.Link>
                  <Nav.Link href="/" style={{width:"50px"}}>
                    <ListGroup.Item style={{width:"50px", borderColor:"white"}}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="facebook">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                      </svg>
                    </ListGroup.Item>
                  </Nav.Link>
                </Nav>
              </ListGroup>
            </Col>
            <Col md={3} lg={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col style={{ color: "black"}}>Price:</Col>
                        <Col>
                          <strong style={{ color: "black"}}><span style={{textDecoration: "line-through", color: "blue"}}>${product.oldPrice}</span> ${product.price}</strong>
                        </Col>
                    </Row>
                  </ListGroup.Item>
                    {product.countInStock > 0 && (
                      <ListGroup.Item>
                        <Row>

                          <Col style={{ color: "black"}}> Qty </Col>
                            <Col xs="auto" className="my-1"> 
                              <Form.Control as="select" style={{backgroundColor:"pink"}} className="sizeFormControl" value={qty} onChange={(e) => setQty(e.target.value)}>
                                {
                                  [...Array(product.countInStock).keys()].map((x) => (
                                    <option key={x + 1}
                                      value={x + 1}>
                                        { x + 1}
                                    </option>
                                  ))
                                }
                              </Form.Control>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      )}
                        <ListGroup.Item>
                          <Button style={{width:"100%"}}  onClick={addToCartHandler} className='btn btn-block' disabled={product.countInStock == 0} type='button'>Add to Cart</Button>
                        </ListGroup.Item>
                        </ListGroup>
                      </Card>
                    </Col>    
                  </Row>  
                )}
                  
                    
                    </div>
    )
}

export default ProductScreen