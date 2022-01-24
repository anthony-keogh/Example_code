import { Container } from 'react-bootstrap'
import { BrowserRouter , Route, Redirect, useLocation, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import ProductsScreen from './screens/ProductsScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import SearchScreen from './screens/SearchScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import ShippingScreen from './screens/ShippingScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import PaymentScreen from './screens/PaymentScreen'
import AboutUsScreen from './screens/AboutUsScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import CheckoutFormScreen from './screens/CheckoutFormScreen'
import PodcastScreen from './screens/PodcastScreen'
import OrderScreen from './screens/OrderScreen'
import CategoryScreen from './screens/CategoryScreen'

//import {Elements, loadStripe} from '@stripe/react-stripe-js';

import CheckoutForm from './screens/CheckoutFormScreen';

//const stripePromise = loadStripe('pk_test_JUehGPqsmSLwiTw7ZPV4ukoJ00LOsqeTmn');


function App({location, history}) {
  
  return (
    
    <BrowserRouter history={history}>
       
      <Header />
        <main >
         
       
          <Route path='/' component={HomeScreen} exact />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/order/:id' component={OrderScreen} />
          
          <Route path='/checkoutForm' component={CheckoutFormScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/payment' component={PaymentScreen} />
          
          <Route path='/aboutus' component={AboutUsScreen} />
          
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          
          <Route path='/admin/productlist' component={ProductListScreen} />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/search' component={ProductsScreen} />
          
          <Route  path="/category" component={CategoryScreen} />
          
          <Route path='/podcast' component={PodcastScreen} />
          <Route path='/search' component={SearchScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          
        </main>
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;