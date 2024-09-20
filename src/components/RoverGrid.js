import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import GridTile from './GridTile';
import "../styles/RoverGrid.css"

function RoverGrid() {
    const vertical = [1, 2, 3, 4, 5, 6, 7, 8];
    const horizontal = [1, 2, 3, 4, 5, 6, 7, 8]
    const rockArray = [60, 61];
    const [move, setMove] = useState("")
    const [locX, setLocX] = useState(6)
    const [locY, setLocY] = useState(1)
    
    let array = []

    useEffect(()=>{
        switch (move) {
            case "up": {
                if (locY < 8) {
                    setLocY((count) => count + 1);
                } else {
                    setLocY(1);
                }
                break;
            }
            case "right": {
                if (locX < 8) {
                    setLocX((count) => count + 1);
                } else {
                    setLocX(1);
                }
                break;
            }
            case "down": {
                if (locY > 1) {
                    setLocY((count) => count - 1);
                } else {
                    setLocY(8);
                }
                break;
            }
            case "left": {
                if (locX > 1) {
                    setLocX((count) => count - 1);
                } else {
                    setLocX(8);
                }
            }
        }
        setMove("")
    },[move])


  return (
      <div className="grid">
          <div className="compass">
              <button className="buttonUp" onClick={() => setMove("up")}>
                  <FontAwesomeIcon className="icon up" icon={faArrowUp} />
              </button>
              <button className="buttonRight" onClick={() => setMove("right")}>
                  <FontAwesomeIcon className="icon right" icon={faArrowRight} />
              </button>
              <div className="compassCenter"></div>
              <button className="buttonDown" onClick={() => setMove("down")}>
                  <FontAwesomeIcon className="icon down" icon={faArrowDown} />
              </button>
              <button className="buttonLeft" onClick={() => setMove("left")}>
                  <FontAwesomeIcon className="icon left" icon={faArrowLeft} />
              </button>
          </div>
          {vertical.reverse().map((verticalNum) =>
              horizontal.map((horizontalNum) => {
                  let indexSum =
                      vertical.indexOf(verticalNum) +
                      horizontal.indexOf(horizontalNum);
                    let object ={
                        x: horizontalNum,
                        y: verticalNum
                    }
                    array.push(object)
                  return (
                      <>
                          <GridTile
                              number={indexSum}
                              vertical={verticalNum}
                              horizontal={horizontalNum}
                              locationX={locX}
                              locationY={locY}
                              index={array.indexOf(object)}
                              array={array}
                              rockArray={rockArray}
                          />
                      </>
                  );
              })
          )}
      </div>
  );
}

export default RoverGrid