import React from 'react'

import fondo from '../../resource/img/fondo-1.png'
import puntos from '../../resource/img/puntos.png'
import '../../styles/about.css'

function About(){
  return(
    <section className="container mt-5">
      <div className="row pt-3">
        <div className="col-md-5 offset-md-1 d-flex align-items-start pt-5">
          <div className="text">
            <span className="title-category mb-2">About Store?</span>
            <p className="text-category mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea placeat ratione dicta eum tempore voluptates quod aliquid atque quae, officia et, eaque in maiores perferendis expedita amet repellendus, dolore fugit.</p>
          </div>
        </div>
        <div className="col-md-5 pl-5 about">
          <div className="img-fondo">
            <img src={fondo} alt="imagen" className="img-section"/>
          </div>
          <div className="points">
            <img src={puntos} alt="points" className="img-points"/>
          </div>
          <div className="cuadrado" ></div>
        </div>
      </div>
    </section>
  )
}

export default About;