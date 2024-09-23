import React from 'react'
import "../styles/Rover.css"

function Rover(props) {

  return (
      <>
          {!props.status ? (
              <div className="rover alive"></div>
          ) : (
              <div className="rover crashed">
                  <h3>I crashed 😫</h3>
              </div>
          )}
          {!props.martianAttack ? (
              <div className="rover alive"></div>
          ) : (
              <div className="rover martianAttack">
                  <h3>A green thing just attacked me 👽</h3>
              </div>
          )}
          {props.game ? (
              <p className="refreshGame">
                  <span>Game Over:</span>
                  <br />
                  Please restart the game
              </p>
          ) : (
              <></>
          )}
      </>
  );
}

export default Rover