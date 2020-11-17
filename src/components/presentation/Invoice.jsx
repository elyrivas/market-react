import React from 'react'

import StateBill from '../../state/state-bill'
import StateCart from '../../state/state-cart'

import Bottom from './Botton'

function Invoice(){

  return(
    <StateBill.Consumer>
      {(bill)=>{
        return(
          <StateCart.Consumer>
            {(carro)=>{
              let total= 0;
              carro.cart.map((item)=>(total=total+item.producto.price)
              )
              console.log(total)
              return(
                <div className="col-md-4 mt-2">
                <div className="card info">
                  <div className="subtitle">
                      Sub Total  
                  </div>
                  <div className="card-info">
                    9 Kg
                  </div>
                  <div className="card-info">
                    $ 180,50 Dollars
                  </div>
                  <div className="subtitle">
                      Impuestos
                  </div>
                  <div className="card-info">
                    12%
                  </div>
                  <div className="card-info">
                    $ 20,05 Dollars
                  </div>
                  <div className="subtitle">
                      Delivery
                  </div>
                  <div className="card-info">
                    1,29 Km
                  </div>
                  <div className="card-info">
                    $ 5,09 Dollars
                  </div>
                  <div className="subtitle">
                    Total
                  </div>
                  <div className="card-info">
                    $ 250,52 Dollars
                  </div>
                  <div className="boton-pagar">
                    <Bottom color="orange" route="/cart" content="Pagar" />
                  </div>
                </div>
              </div>
              )
            }
            }
          </StateCart.Consumer>
        )
      }}
    </StateBill.Consumer>
  )
}




export default Invoice ;
 