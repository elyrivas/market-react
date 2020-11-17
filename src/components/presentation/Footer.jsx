import React from 'react'

import logo from '../../resource/img/logo.png'
import caribes from '../../resource/img/caribes.png'
import '../../styles/footer.css'

function Footer(){
  return(
    <section className="footer mt-5">
      <div className="container pt-3 pb-3">
        <div className="row ">
          <div className="col-md-2">
            <img src={logo} alt="logo" className="pt-3"/>
          </div>  
          <div className="col-md-3">
            <ul>
              <li className="title">Direccion</li>
              <li className="sub-title pt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum harum eaque inventore optio iusto laudantium.</li>
            </ul>
          </div>  
          <div className="col-md-3">
            <ul>
              <li className="title">Contacts</li>
              <li className="sub-title pt-1">+58(444) 5858643</li>
              <li className="sub-title">contact@contact.es</li>
            </ul>
          </div>  
          <div className="col-md-2">
            <ul>
              <li className="title">Links</li>
              <li className="sub-title pt-1">Cart</li>
              <li className="sub-title">Products</li>
              <li className="sub-title">About</li>
              <li className="sub-title">Login</li>
            </ul>  
          </div>  
          <div className="col-md-2">
            <img src={caribes} alt="logo" className="pt-3"/>  
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;