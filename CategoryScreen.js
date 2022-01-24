import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container, Image, Card, CardGroup, Carousel,Form,  Button, Nav, ListGroup} from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { LinkContainer, Link } from 'react-router-bootstrap'
import { listProducts } from '../actions/productActions'
import axios from 'axios'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import SearchBox from '../components/SearchBox'

function CategoryScreen({  match, location, history }) {

    
    const {search} = useLocation()
    const Newlocation = useLocation().pathname
    const searchParams = new URLSearchParams(search)
    
    let sliceNewlocation = Newlocation.slice(10)
    console.log(sliceNewlocation)
    const categoryList = searchParams.get('category')
    const  [products, setProducts] = useState([])
    
  

    useEffect(() => {
        async function fetchProducts(){
        const  {data} = await axios.get(`/api/products/category/${sliceNewlocation}`)
        setProducts(data)
      }
      fetchProducts()
  }, [])

 
    return (
        <div className="py-3" container-fluid>

  
  <div style={{backgroundColor:"white", marginTop:"50px"}}>
 <div className="div-before-products"></div>
                    <div>
                        <Row className="row-products categoryscreen">
                            {products.map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>
                       
                    </div>
                    <div style={{height:"50px"}}></div>         
</div>
  

  

        </div>
    )
}

export default CategoryScreen