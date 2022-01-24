import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'


function Product( { product } ) {
    return (
        <Row xs={1} sm={3} md={1} className="g-4">
            <Col sm={2} xs={12}>
                <Card className="my-3 p-3 rounded cardProduct">
                    <Link to={`/product/${product._id}`}>
                        <Card.Img className="product-img" style={{height: "320px"}} src={product.image} />
                    </Link>

                <Card.Body>
                    <Link to={`/product/${product._id}`}>
                        <Card.Title as="div">
                            <span style={{fontSize:"15px"}}>{product.name}</span>
                        </Card.Title>
                    </Link>

                <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={product.rating}  text={`${product.numReviews} reviews`} color={'pink'} />
                    </div>
                </Card.Text>

                <Card.Text as="div">
                    <div className="my-3 rcorners">
                        <p className="p-rcorners" style={{ color:"white"}}>Exclusive</p>
                    </div>
                    <div className="my-3" style={{fontSize: "15px"}}>
                        <span style={{textDecoration: "line-through", color: "#429fba"}}>${product.oldPrice}</span> ${product.price}
                    </div>
                </Card.Text>
            
            </Card.Body>
        </Card>
    </Col>
    </Row>
    )
}

export default Product