import React, {useState, useEffect}  from 'react'
import Rover from "./Rover.js"
import Rocks from './Rocks.js'
import Water from './Water.js'
function GridTile(props) {
    let locationX = props.locationX
    let locationY = props.locationY
    const [hasRock, setHasRock] = useState(false);

useEffect(()=>{
    setHasRock(false);
    props.rockArray.forEach((item) => {
        if (
            props.array[item]["x"] === locationX &&
            props.array[item]["y"] === locationY
        ) {
            setHasRock(true);
            return;
        }
    });
    props.iceArray.forEach((item) => {
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
        alert("You successfully found all of the water!");
        window.location.reload();
    }
    // eslint-disable-next-line
},[locationX, locationY])

    return (
        <div key={props.index}>
            <div
                className={
                    props.number % 2 ? "gridTile evenTile" : "gridTile oddTile"
                }
            >
                <div className="container">
                    {props.horizontal === locationX &&
                    props.vertical === locationY ? (
                        <Rover  status={hasRock}/>
                    ) : (
                        <></>
                    )}
                    {props.rockArray.map((rock) => {
                        if (rock === props.index) return <Rocks />;
                    })}
                    <>
                    {props.iceArray.map((ice) => {
                        if (ice === props.index) return <Water />;
                    })}
                        
                    </>
                </div>
            </div>
        </div>
    );
}

export default GridTile