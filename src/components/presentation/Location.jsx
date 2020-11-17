import React from 'react'

import puntos from '../../resource/img/puntos.png'
import '../../styles/location.css'

export default function Location(){
  return(
    <section className="container mt-5">
      <div className="row pt-3">
        
        <div className="col-md-6 offset-md-1 ">
          <div className="map">
           
          </div>
          <div className="cuadrado-map"></div>
        </div>

        <div className="col-md-4 d-flex flex-column align-items-start pt-5">
          <div className="text">
            <span className="title-category mb-2 mt-4">Location in map</span>
            <p className="text-category mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea placeat ratione dicta eum tempore voluptates quod aliquid atque quae.</p>
            <p className="text-category">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
          </div>
          <div className="points">
            <img src={puntos} alt="points" className="img-points-map"/>
          </div>
        </div>

      </div>
    </section>
  )
}