import React from 'react'
import "../styles/Rover.css"

function Rover(props) {
  return(
    <>
      {
        !props.status ? <div className='rover alive'></div>
        :
        <div className='rover crashed'></div>
      }
    </>
  )
}

export default Rover