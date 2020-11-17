import React from "react"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

import './styles/index.css'
import './styles/Fonts/fonts.css'
import 'bootstrap/dist/css/bootstrap.css'

import Home from "./views/Home"
import Login from "./views/Login"
import Cart from "./views/Cart"
import Store from "./views/Store"
import Register from "./views/Register"
import About from "./views/About"

import {products} from './resource/products.json';
import {carts} from './resource/cart.json'

import StateProducts from './state/state-products'
import StateCart from './state/state-cart'
import StateBill from './state/state-bill'


function App() {

  const [producto,setProducto] = React.useState(products);
  const [cart,setCart] = React.useState(carts);
  const [bill,setBill] = React.useState({});

  return (
    <StateProducts.Provider value={{producto, setProducto}}>
      <StateCart.Provider value={{cart, setCart}}>
      <StateBill.Provider value={{bill, setBill}}>
        <Router>
          <Switch>
            <Route path="/home" exact>
              <Home/>
            </Route>
            <Route path="/cart" exact>
              <Cart/>
            </Route>
            <Route path="/about" exact>
              <About/>
            </Route>
            <Route path="/store" exact>
              <Store/>
            </Route>
            <Route path="/register" exact>
              <Register/>
            </Route>
            <Route path="/login" exact>
              <Login/>
            </Route>
            <Route path="/" exact>
              <Home/>
            </Route>
          </Switch>
        </Router>
      </StateBill.Provider>
      </StateCart.Provider>
    </StateProducts.Provider>
  )
}

export default App