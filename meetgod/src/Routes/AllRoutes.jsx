import React from 'react'
import {Routes, Route} from "react-router-dom"
import Products from '../Pages/Products'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Posts from '../Pages/Posts'
import Cart from '../Pages/Cart'
import SingleProduct from '../Pages/SingleProduct'
import Home from '../Pages/Home'
import Spiritual from '../Pages/Spiritual'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/products" element={<Products/>} ></Route>
      <Route path="/spiritual" element={<Spiritual/>} ></Route>
      <Route path="/login"  element={<Login/>}></Route>
      <Route path="/signup"  element={<Signup/>}></Route>
      <Route path="/posts"  element={<Posts/>}></Route>
      <Route path="/cart"  element={<Cart/>}></Route>
      <Route path="/product/:id"  element={<SingleProduct/>}></Route>
    </Routes>
  )
}

export default AllRoutes