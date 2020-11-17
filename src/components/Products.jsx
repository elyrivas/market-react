import React from 'react'
import Card from './presentation/Card'

import StateProducts from '../state/state-products'

function Products(props){
  return(
    <StateProducts.Consumer>
      {(productos)=>{
        return(
          productos.producto.slice(0,8).map((item,key)=>{
            return(
              
                <Card 
                  product={item}
                  mode={props.mode}
                />
            )
          })
        )
      }}
    </StateProducts.Consumer>
  )
}

// function Products (props) {

//   const [products,setProducts]=useState(props.content)
  
//   return(
//     products.slice(0,8).map((item,i)=>{
//       return(
//         <div className="col-md-3">
//           <Card 
//             id={i}
//             name={item.title}
//             price={item.price}
//             img={item.filename}
//           />
//         </div>
//       )
//     })
//   )
// }



export default Products ;
 