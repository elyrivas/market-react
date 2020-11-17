import React from "react"

function Item (props){

  const style = {
    box: {
    },
    title: {
      fontFamily: 'inter-bold',
      fontSize: '16px'
    },
    text: {
      fontFamily: 'inter-regular',
      fontSize: '14px'
    }
  }

  return(
    <div className="box text-center pr-3 pl-3" style={style.box}>
      <figure>
        <img src="" alt={props.icon}/>
      </figure>
      <div className="title text-center pt-3" style={style.title}>
        {props.title}
      </div>   
      <div className="text pt-2" style={style.text}>
        <p>{props.content}</p>
      </div>   
    </div>
  )
}

export default Item;