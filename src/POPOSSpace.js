import React from 'react'
import logo from './logo.svg'

function POPOSSpace(props) {
  // Get the
  const { name, image, address, hours } = props
  return (
    <div className="POPOSSpace">
      <h1>{name}</h1>
      <img src={`${process.env.PUBLIC_URL}/dodge.jpg`} width="300" height="300" alt="Hello" />
      <div>{address}</div>
      <div>{hours}</div>
    </div>
  )
}

export default POPOSSpace