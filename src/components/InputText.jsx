import React from 'react'
import './style/inputText.css'

function InputText({type, name}) {
  return (
    <div className='inputText'>
      <input 
        type={type} 
        placeholder={name}
      />
    </div>
  )
}

export default InputText
