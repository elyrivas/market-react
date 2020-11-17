import React from "react"

import Hero from "../components/presentation/Hero"
import Footer from "../components/presentation/Footer";
import ShoppingCart from "../components/ShoppingCart";


function Cart (){
  return(
    <div className="cart">
      <Hero/>
      <ShoppingCart/>
      <Footer/>
    </div>    
  )
}

export default Cart;