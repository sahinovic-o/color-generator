import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  // const hex = rgbToHex(...rgb) jedan nacin da dodjemo do hex coda preko funckije a drugi iz paketa values.js, hexColor
  // console.log(bcg);
  const hexValue = `#${hexColor}`

  useEffect(()=>{
    const timeout = setTimeout(() =>{
      setAlert(false)
    }, 3000)

    return ()=> clearTimeout(timeout)

  }, [alert])
  return (
    
    <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor : `rgb(${bcg})`}} onClick={()=> {
      setAlert(true);
      navigator.clipboard.writeText(hexValue); // kopiranje hex vrijednosti
    }}>

      
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p> }
    </article>
    
    
  )
}

export default SingleColor
