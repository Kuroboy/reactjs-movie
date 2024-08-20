import React from 'react'
import './style/button.css'

function Button({icon, name, bgcolor, color}) {
  return (
    <a 
        href='/#' 
        className="mainBtn"
        style={{
                color:color,
                backgroundColor: bgcolor          
            }}>
        {icon}{name}
    </a>
  )
}

export default Button
