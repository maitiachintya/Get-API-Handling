import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Header from '../layout/Header'
import Home from '../components/Home'
import About from '../components/About'
import PageNotFound from '../components/PageNotFound'
import User from '../components/user/User'
import UserDetails from '../components/userDetails/UserDetails'
import Product from '../components/product/Product'
import ProductDetails from '../components/productDetails/ProductDetails'
import ProdItem from '../components/prodItem/ProdItem'
import ProdItemDetails from '../components/prodItem/prodItemDetails/ProdItemDetails'

const Routing = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='' element={<Home />}></Route>
          <Route path='about-page' element={<About />}></Route>
          <Route path='users-page' element={<User />}></Route>
          <Route path='users-page/details/:userId' element={<UserDetails />}></Route>
          <Route path='products-page' element={<Product />}></Route>
          <Route path='products-page/informations/:productId' element={<ProductDetails />}></Route>
          <Route path='items-page' element={<ProdItem />}></Route>
          <Route path='items-page/briefs/categories/:itemId' element={<ProdItemDetails/>}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default Routing
