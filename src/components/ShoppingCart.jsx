import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

import Invoice from './presentation/Invoice'

import StateCart from '../state/state-cart'

import '../styles/shoppingCart.css'

import { Add, Clear, Remove } from '@material-ui/icons'

function Cart(){

  const [content,setContent]= useState(0)
  const forceUpdate = React.useReducer(bool => !bool)[1];


  function truncate(n) {
    let t=n.toString();
    let regex=/(\d*.\d{0,2})/;
    return t.match(regex)[0];
  }

  return(
    <StateCart.Consumer>
      {(carro)=>{
        if(carro.cart.length>0){
          setContent(()=>(carro.cart.length))
        }else{
          setContent(false)
        }
        return(
          <>
            {
              content
              ?
              <div className="cart mt-5" >
                <div className="container mt-5">
                  <div className="row ">
                    <div className="col-md-5 title-cart">
                      <span >Products</span>
                    </div>
                    <div className="col-md-2 title-cart">
                      <span>Price</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8">
                    {carro.cart.map((item,key)=>{
                    const id=item.id;
                    return(
                      <div className="card pt-2 pb-2 mt-2">
                        <div className="row card-alt">
                          <div className="col-md-2 ">
                            <img className="img-cart pl-2 " src={`/img/${item.producto.filename}`} alt="img"/>
                          </div>
                          <div className="col-md-3 d-flex flex-column justify-content-center align-items-start">
                            <div className="name">
                              {item.producto.title}
                            </div>
                            <div className="price">
                              $ {item.producto.price}
                            </div>
                          </div>
                          <div className="col-md-2 d-flex justify-content-start align-items-center">
                            <div className="cant d-flex justify-content-center align-items-center">
                              <button className="boton"
                                onClick={()=>{
                                  if(item.cantidad>1){
                                    let newCart= carro.cart
                                    newCart[key].cantidad=newCart[key].cantidad-1
                                    carro.setCart(newCart)
                                    forceUpdate()
                                  }else{
                                    carro.setCart(carro.cart.filter(item=>item.id!==id))
                                  }
                                }}
                              >
                                <Remove className="boton-oper"/>
                              </button>
                              <div className="cantidad">{item.cantidad}</div>
                              <button className="boton"
                                onClick={()=>{
                                  let newCart= carro.cart
                                  newCart[key].cantidad=newCart[key].cantidad+1
                                  carro.setCart(newCart)
                                  forceUpdate()
                                }}
                              >
                                <Add className="boton-oper"/>
                              </button>
                            </div>
                          </div>
                          <div className="col-md-2 d-flex justify-content-center align-items-center">
                            <div className="total">
                              $ {truncate(item.producto.price*item.cantidad)}
                            </div>
                          </div>
                          <div className="col-md-2 offset-md-1 d-flex justify-content-start align-items-center">
                            <div className="remove">
                              <button 
                                className="boton"
                                //onClick={() => productos.setProducto(producto=>producto.concat(ely))}
                                onClick={() => carro.setCart(carro.cart.filter(item=>item.id!==id))}
                              >
                                <Clear className="remove"/>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      )
                     })}
                    </div>
                    <Invoice/>
                  </div>
                </div>
              </div>
              :
              <div className="container cart mt-5" >
                <div className="row">
                  <div className="col-md-3">
                    <span className="aviso">No existen productos <NavLink to="/store">Comprar</NavLink></span>
                  </div>
                </div>
              </div>
            } 
          </>
        )
      }}
    </StateCart.Consumer>
  )
}

export default Cart;

              



