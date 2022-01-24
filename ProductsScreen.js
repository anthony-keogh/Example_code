import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container, Image, Card, CardGroup, Carousel, Button, Nav, ListGroup, Form} from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProducts } from '../actions/productActions'
import SearchBox from '../components/SearchBox'

function HomeScreen({ history }) {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  
  const { error, loading, products, page, pages } = productList
  let keyword = history.location.search

  useEffect(() => {
    dispatch(listProducts(keyword))

}, [dispatch, keyword])
    

    return (
      
      <div>
        
    <Col md={3}>
    
           <Card style={{borderColor:"white"}}>
              
           
           </Card>
           </Col>       
            
            <div >
            
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                :
                <Row>
                    {products.map(product => (
                      <Col key={product._id}  sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                      </Col>
                ))}  
                </Row>
            
          }
            
            
            </div>
           


        </div>
    )
}

export default HomeScreen