import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './Product'
import Cart from './Cart'
import Nav from './Nav'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
export default function Main() {
  return (
    <div>

        <BrowserRouter>
        <Nav/>
            <Routes>
                <Route path="product" element={<Product/>}/>
                <Route path="cart" element={<Cart/>}/>
            </Routes>
        </BrowserRouter>


    </div>
  )
}
