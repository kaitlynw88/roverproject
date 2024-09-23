import React from 'react'
import RoverGrid from "../components/RoverGrid";
import { useState } from "react";

function MainPage() {
    const [difficulty, setDifficulty] = useState();
    const rockArray = [];
    const iceArray = [];

    const formSubmit = (e) => {
        switch (e.target.value) {
            case "easy": {
                setDifficulty(10);
                break;
            }
            case "medium": {
                setDifficulty(15);
                break;
            }
            case "hard": {
                setDifficulty(20);
                break;
            }
            default: {
                setDifficulty("");
            }
        }
    };

    const randomNumberGen = () => {
        //Calculate an array of random numbers for tiles with Ice. Ice should not be placed on startng tile
        for (let i = 1; i <= 6; i++) {
            let random1 = Math.floor(Math.random() * 64) + 2;
            if (random1 !== 56) {
                iceArray.push(random1);
            }
        }

        //Calculate an array of random numbers for tiles with Rocks. Check first that tile doesn't already have Ice. Rocks should not be placed on starting tile (grid 56) and the tile to the right (grid 57). The length of rock array is equal to the difficulty setting.
        for (let i = 1; i <= difficulty; i++) {
            let random = Math.floor(Math.random() * 62) + 2;
            if (
                random !== 56 &&
                random !== 57 &&
                iceArray.includes(random) === false
            ) {
                rockArray.push(random);
            }
        }
    };

    randomNumberGen();

    const refresh = () => {
        setDifficulty("");
        randomNumberGen();
    };
  return (
      <>
          {difficulty ? (
              <>
                  <button className="refreshButton" onClick={refresh}>
                      Restart Game
                  </button>
                  <RoverGrid rockArray={rockArray} iceArray={iceArray} />
              </>
          ) : (
              <>
                  <div className="hero">
                      <h3>Select your difficulty</h3>
                      <p>
                          It's the year 2012 and Curiosity rover has just landed
                          on Mars. Satellite images have found possible sources
                          of ice on the surface, but the terrain is rockier than
                          expected. Can you avoid all the treacherous rocks and
                          boulders and get to all the ice?
                      </p>
                      <form onChange={formSubmit}>
                          <select name="difficulty">
                              <option value="">Please select</option>
                              <option value="easy">Easy</option>
                              <option value="medium">Medium</option>
                              <option value="hard">Hard</option>
                          </select>
                      </form>
                  </div>
              </>
          )}
      </>
  );
}

export default MainPage