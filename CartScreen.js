import React, {useEffect, useState} from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import  Message  from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import Product from '../components/Product'


export default function CartScreen({ match, location, history }) {
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    
    //const searchParams = new URLSearchParams(search)
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart
    
    let keyword = history.location.search
    
    


    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, qty))

        }
    }, [dispatch, productId, qty])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }
    
    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }

    return (
        <Row style={{backgroundColor:"white"}}>
            <Col md={8}>
               <h4 style={{padding:"20px"}}>Shopping cart</h4>
               {cartItems.length === 0 ? (
                   <Message variant='info'>
                       Your Cart is empty <Link to='/'>Go Back to Homepage</Link>
                   </Message>
               ) : (
                   <ListGroup variant='flush'>
                       {cartItems.map(item => (
                           <ListGroup.Item key={item.product} style={{color:"black"}}>
                               <Row style={{color:"black"}}>
                                   <Col md={2}>
                                       <Image src={item.image} alt={item.name} fluid rounded />
                                   </Col>
                                   <Col md={2} style={{color:"black"}}>
                                       <Link className="product-name-cart" to={`/product/${item.product}`} >{item.name}</Link>
                                   </Col>
                                   <Col md={2} style={{color:"black"}}>
                                      ${item.price}
                                      
                                     
                                   </Col>
                                   
                                   
                                   <Col md={3}>
                                   <p style={{color:"#FF00FF", fontWeight:"bold"}}>Quantity <span style={{color:"black", fontWeight:"normal"}}>({item.qty})</span></p>
                                   </Col>
                                   <Col md={2}>
                                   
                                   </Col>
                                   
                                   <Col md={1}>
                                            <Button
                                                type='button'
                                                variant='light'
                                                onClick={() => removeFromCartHandler(item.product)}
                                            >
                                                <i className='fas fa-trash'></i>
                                            </Button>
                                        </Col>
                               </Row>
                               
                           </ListGroup.Item>
                       ))}
                   </ListGroup>
               )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item style={{color:"black"}}>
                          
                           <h5 style={{color:"black"}}>Total</h5>
                              ${cartItems.reduce((acc, item) => acc + item.qty * item.price * 1 , 0 ).toFixed(2)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button type='button' className='btn-block' diasbled={cartItems.length === 0} onClick={checkoutHandler}>
                                Proceed To Checkout
                            </Button>
                        </ListGroup.Item>

                    </ListGroup>
                </Card>
            </Col>
        </Row>
    )
}