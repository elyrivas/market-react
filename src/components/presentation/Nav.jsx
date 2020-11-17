import React from 'react'
import {NavLink} from 'react-router-dom'

import '../../styles/Nav.css'
import logo from '../../resource/img/logo.png'
import { ShoppingCart } from '@material-ui/icons'

function Nav() {
  return(
    <div className="">
        <div className="row nav-top pt-4">
          <div className="col-md-4 offset-md-1 direccion">Lorem ipsum dolor sit amet, codolore magna aliqua.</div>
          <div className="col-md-2 offset-md-3 text-right contact">+58 (416) 2587496</div>
          <div className="col-md-1 cart text-center">
            <NavLink to="/cart" className="link" >
              Cart
              <i><ShoppingCart/></i>
            </NavLink>
          </div>
        </div>
        <hr className="line"/>
        <div className="row nav-buttom pt-3">
          <div className="col-md-1 offset-md-1 logo">
            <img src={logo} alt="logo"/>
          </div>
          <div className=" col-md-4 offset-md-5 pt-2 links">
            <div className="links d-flex justify-content-around">
              <NavLink to="/home" className="link" activeClassName="d-active" >
                Home
              </NavLink>
              <NavLink to="/store" className="link" activeClassName="d-active" >
                Store
              </NavLink>
              <NavLink to="/register" className="link" activeClassName="d-active" >
                Register
              </NavLink>
              <NavLink to="/login" className="link" activeClassName="d-active" >
                Login
              </NavLink>
              <NavLink to="/about" className="link" activeClassName="d-active" >
                About
              </NavLink>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Nav;

