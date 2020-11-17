import React from "react"

import Hero from "../components/presentation//Hero"
import Item from "../components/presentation/Item"
import Products from "../components/Products"
import Howbuy from "../components/presentation/Howbuy"
import Slogan from "../components/presentation/Slogan"
import About from "../components/presentation/About"
import Location from "../components/presentation/Location"
import Footer from "../components/presentation/Footer"

import '../styles/Home.css'

function Home (){
  return(
    
      <div>
      <Hero />

      <section className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-3">
            <Item 
              content="Lorem ipsum dolor sit amet, codolore magna aliqua. Quis ipsum suspendisse." 
              title="Content"
              icon="icono"
            />
          </div>
          <div className="col-md-3">
            <Item 
              content="Lorem ipsum dolor sit amet, codolore magna aliqua. Quis ipsum suspendisse." 
              title="Content 2"
              icon="icono"
            />
          </div>
          <div className="col-md-3">
            <Item 
              content="Lorem ipsum dolor sit amet, codolore magna aliqua. Quis ipsum suspendisse." 
              title="Content 3"
              icon="icono"
            />
          </div>
          <div className="col-md-3">
            <Item 
              content="Lorem ipsum dolor sit amet, codolore magna aliqua. Quis ipsum suspendisse." 
              title="Content 4"
              icon="icono"
            />
          </div>
        </div>
      </section>

      <About/>

      <section className="container products mt-5 pl-5 pr-5 pb-3">
        <div className="row d-flex flex-column justify-content-center align-items-center">
          <div className="category text-center d-flex flex-column align-items-center">
            <h1 className="title-category">New Products</h1>
            <p className="text-category">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eum explicabo at eius iure odit animi asperiores.</p>
          </div>
          <div className="row products">
            <Products mode="vertical"/>
          </div>
        </div>
      </section>
      
      <Slogan/>

      <section className="container mt-5">
        <div className="row d-flex flex-column justify-content-center align-items-center">
          <div className="category text-center d-flex flex-column align-items-center">
            <h1 className="title-category">How to buy</h1>
            <p className="text-category">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eum explicabo at eius iure odit animi asperiores.</p>
          </div>
        </div>
        <div className="row">
          <Howbuy/>
        </div>
      </section>

      <Location/>
      
      <Footer/>
    </div>
    
  )
}

export default Home;