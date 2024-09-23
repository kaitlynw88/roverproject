import React, {useState, useEffect}  from 'react'
import Rover from "./Rover.js"
import Rocks from './Rocks.js'
import Water from './Water.js'
import { v4 as uuidv4 } from "uuid";
function GridTile(props) {
    let locationX = props.locationX
    let locationY = props.locationY
    const [hasRock, setHasRock] = useState(false);
    const [gameOver, setGameOver] = useState(false)

useEffect(()=>{
    setHasRock(false);
    setGameOver(false);
    props.rockArray.forEach((item) => {
        //Check if rover is on a tile with rock. If so, send state to rover that it has crashed
        if (
            props.array[item]["x"] === locationX &&
            props.array[item]["y"] === locationY
        ) {
            setHasRock(true);
            return;
        }
    });
    props.iceArray.forEach((item) => {
        //If rover is on a tile with ice, remove ice from iceArray.  If no more ice remains, set state to game over.
        if (
            props.array[item]["x"] === locationX &&
            props.array[item]["y"] === locationY
        ) {
            let index = props.iceArray.indexOf(item);
            props.iceArray.splice(index, 1);
            return;
        }
    });
    if (props.iceArray.length === 0) {
        setGameOver(true);
    }
    // eslint-disable-next-line
},[locationX, locationY, gameOver])


    return (
        <div>
            <div
                className={
                    props.number % 2 ? "gridTile evenTile" : "gridTile oddTile"
                }
            >
                <div className="container">
                    {props.horizontal === locationX &&
                    props.vertical === locationY ? (
                        <Rover status={hasRock} game={gameOver} />
                    ) : (
                        <></>
                    )}
                    <>
                        {/* eslint-disable-next-line */}
                        {props.rockArray.map((rock) => {
                            if (rock === props.index) return <Rocks key={uuidv4()} />;
                        })}
                    </>
                    <>
                        {/* eslint-disable-next-line */}
                        {props.iceArray.map((ice) => {
                            if (ice === props.index) return <Water key={uuidv4()} />;
                        })}
                    </>
                </div>
            </div>
        </div>
    );
}

export default GridTile