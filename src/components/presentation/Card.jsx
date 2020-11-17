import React from 'react'

import StateCart from '../../state/state-cart'

function Card (props) {

  const style={
    card: {
      height: '425px',
      boxShadow: '0px 3px 7px -8px #000000'
    },
    info:{
      padding:'10px',
      textAlign: 'center'
    },
    img:{    
      height: '300px'
    },
    title:{
      fontFamily: 'inter-medium',
      fontSize: '14px',
      color: '#8e8e8e'
    },
    price:{
      fontFamily: 'inter-bold',
      fontSize: '18px'
    },
    buttonOrange:{
      backgroundColor: '#ff8300',
      height: 38,
      borderRadius: 29,
      border: '2px solid #fd9500',
      width: 120,
      color: 'white',
      fontFamily: 'inter-bold',
      fontSize: 13,
      boxShadow: 'rgb(0, 0, 0) 0px 2px 5px -8px'  
    }
  }

  let cant={
    id: props.product.id,
    cantidad: 1,
    total: props.product.price,
    producto:props.product
  }

  return(
    <StateCart.Consumer>
      {(cart)=>{
        if(props.mode==="vertical"){
          return(
            <div className="col-md-3">
              <div className="card d-flex flex-column align-items-center mt-4" style={style.card}>
                
                <img className="card-img-top" src={`/img/${props.product.filename}`} style={style.img} alt="img"/>
                
                <div className="info" style={style.info}>
                  <span style={style.title}>{props.product.title.slice(0,22)}</span>
                  <p style={style.price}>$ {props.product.price}/<small>Kg</small> </p>
                  <button 
                    style={style.buttonOrange} 
                    onClick={() => {
                      const found = cart.cart.find(element => element.id===props.product.id);
                      if(found){
                        cant.cantidad=found.cantidad+1
                        cart.setCart(cart.cart.filter(objeto=>objeto.id!==props.product.id))
                        cart.setCart(cart=>cart.concat(cant))
                      }else{
                        cart.setCart(cart=>cart.concat(cant))
                      }
                    }}
                    //onClick={() => cart.setCart(cart=>cart.concat(props.product))}
                    //onClick={() => carts.setCart(cart.count + 1)}
                  >
                    Add cart
                  </button>
                </div>
              </div>
            </div>
          )
        }else{
          return(
            <div className="card">
              juanes
            </div>
          )
        }
      }}
    </StateCart.Consumer>
  )
}

export default Card ;