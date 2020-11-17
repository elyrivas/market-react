import React from "react"

import Hero from "../components/presentation/Hero";
import Footer from "../components/presentation/Footer";
import Products from "../components/Products";

function Store (){
  return(
    <div className="store">
      <Hero/>

      <section className="container products mt-5 pl-5 pr-5 pb-3">
        <div className="row d-flex flex-column justify-content-center align-items-center">
          <div className="category text-center d-flex flex-column align-items-center">
            <h1 className="title-category">New Products</h1>
            <p className="text-category">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eum explicabo at eius iure odit animi asperiores.</p>
          </div>
          <div className="row products">
            <Products mode="horizontal"/>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  )
}

export default Store;