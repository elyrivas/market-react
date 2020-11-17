import React from 'react'

import fondo from '../../resource/img/fondo-1.png'

function Slogan(props){
  
  const style = {
    slogan: {
      height: '300px',
      backgroundImage: `url(${fondo})`
    }
  }

  return(
    <div className="slogan mt-5 mb-5 pb-3" style={style.slogan}>
    </div>
  )
}

export default Slogan;