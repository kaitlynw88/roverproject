import React from 'react'
import "../styles/Rover.css"

function Rover(props) {
  return(
    <>
      {
        !props.status ? <div className='rover alive'></div>
        :
        <div className='rover crashed'>
          <h3>I crashed :(</h3>
        </div>
      }
      {props.game ? <button className="refreshGame" onClick={()=>window.location.reload()}>Game Over</button>
      :<></>
      }
    </>
  )
}

export default Rover