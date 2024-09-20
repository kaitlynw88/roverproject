import React, {useState, useEffect}  from 'react'
import Rover from "./Rover.js"
import Rocks from './Rocks.js'
function GridTile(props) {
    let locationX = props.locationX
    let locationY = props.locationY
    const [hasRock, setHasRock] = useState(false);

useEffect(()=>{
    setHasRock(false)
    props.rockArray.forEach((item)=>{
        if(props.array[item]["x"] === locationX && props.array[item]["y"] === locationY){
            setHasRock(true)
            return
        }   
        
    })
},[locationX, locationY])



    return (
        <div key={props.index}>
            <div
                className={
                    props.number % 2 ? "gridTile evenTile" : "gridTile oddTile"
                }
            >
                <div className='container'>
                    {props.horizontal === locationX &&
                    props.vertical === locationY ? (
                        <Rover status={hasRock} />
                    ) : (
                        <></>
                    )}
                    {props.rockArray.map((rock) => {
                        if (rock === props.index) return <Rocks />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default GridTile