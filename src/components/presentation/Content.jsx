import React from "react"
import Button from './Botton'

var Content = (props)=>{

  const style = {
    box: {
      height: '80%'
    },
    slogan: {
      fontFamily: 'inter-black',
      fontSize: 45,
      color: 'white'
    },
    text: {
      fontFamily: 'inter-regular',
      fontSize: 15,
      color: 'white'
    }

  } 

  return(
    <div className="content col-md-6 offset-md-1 d-flex flex-column justify-content-center align-items-start" style={style.box}>
      <h1 style={style.slogan}>Lorem ipsum dolor sit amet consecteturaliqua.</h1>
      <p className="pt-2 pb-3" style={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <Button color="transparent" content="Products" route="/store"/>
    </div>
  )
}

export default Content