import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import GridTile from './GridTile';
import "../styles/RoverGrid.css"
import { v4 as uuidv4 } from "uuid";
// import { isDisabled } from '@testing-library/user-event/dist/utils';

function RoverGrid(props) {
    const vertical = [1, 2, 3, 4, 5, 6, 7, 8];
    const horizontal = [1, 2, 3, 4, 5, 6, 7, 8]
    const [move, setMove] = useState("")
    //rover starts at (X = 1, Y = 1)
    const [locX, setLocX] = useState(1)
    const [locY, setLocY] = useState(1)
    //Alien starts at (X = 8, Y = 8)
    const [alienLocX, setAlienLocX] = useState(8)
    const [alienLocY, setAlienLocY] = useState(8);

    const alienMovement = ()=>{
        let randomAlien = Math.floor(Math.random() * 4) + 1
            switch (randomAlien) {
                case 1: {
                    if (alienLocY < 8) {
                        setAlienLocY((count) => count + 1);
                    } else {
                        setAlienLocY(1);
                    }
                    break;
                }
                case 2: {
                    if (alienLocX < 8) {
                        setAlienLocX((count) => count + 1);
                    } else {
                        setAlienLocX(1);
                    }
                    break;
                }
                case 3: {
                    if (alienLocY > 1) {
                        setAlienLocY((count) => count - 1);
                    } else {
                        setAlienLocY(8);
                    }
                    break;
                }
                case 4: {
                    if (alienLocX > 1) {
                        setAlienLocX((count) => count - 1);
                    } else {
                        setAlienLocX(8);
                    }
                    break;
                }
                default: {
                    return;
                }
            }
            
    }
    
    let array = []

    useEffect(()=>{
        alienMovement()
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
                break;
            }
            default: {
                return;
            }
        }
        setMove("");
        // eslint-disable-next-line
    },[move])

  return (
      <div className="grid">
          <div className="compass">
              <button
                  className="buttonUp"
                  onClick={() => setMove("up")}
              >
                  <FontAwesomeIcon className="icon up" icon={faArrowUp} />
              </button>
              <button
                  className="buttonRight"
                  onClick={() => setMove("right")}
              >
                  <FontAwesomeIcon className="icon right" icon={faArrowRight} />
              </button>
              <div className="compassCenter"></div>
              <button
                  className="buttonDown"
                  onClick={() => setMove("down")}
              >
                  <FontAwesomeIcon className="icon down" icon={faArrowDown} />
              </button>
              <button
                  className="buttonLeft"
                  onClick={() => setMove("left")}
              >
                  <FontAwesomeIcon className="icon left" icon={faArrowLeft} />
              </button>
          </div>
          {vertical.reverse().map((verticalNum) =>
              horizontal.map((horizontalNum) => {
                  let indexSum =
                      vertical.indexOf(verticalNum) +
                      horizontal.indexOf(horizontalNum);
                  let object = {
                      x: horizontalNum,
                      y: verticalNum,
                  };
                  array.push(object);
                  return (
                      <div key={uuidv4()}>
                          <GridTile
                              number={indexSum}
                              vertical={verticalNum}
                              horizontal={horizontalNum}
                              locationX={locX}
                              locationY={locY}
                              index={array.indexOf(object)}
                              array={array}
                              rockArray={props.rockArray}
                              iceArray={props.iceArray}
                              alienX={alienLocX}
                              alienY={alienLocY}
                              martian={props.martian}
                          />
                      </div>
                  );
              })
          )}
      </div>
  );
}

export default RoverGrid