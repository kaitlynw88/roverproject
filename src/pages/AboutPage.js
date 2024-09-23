import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/AboutPage.css"

function AboutPage() {
  return (
      <div className="aboutPage">
          <h2>About</h2>
          <div>
              <h3>Some context:</h3>
              <p>
                  This app was inspired by the{" "}
                  <span className="italics">Mars Rover Kata</span>{" "}
                  <Link to="https://learn.madetech.com/katas/mars-rover/">
                      Link here
                  </Link>
              </p>
              <p>
                  The Kata instructs the coder to create a list of instructions
                  for navigating a rover across a 10 X 10 grid. The rover can
                  only go backwards or forwards and can rotate so that it faces
                  either: N,S,E,W.
              </p>
              <p>
                  For the simplicity of the app at it's launch, I allowed the
                  rover to travel in each direction and not worry about
                  rotating. Creating a separate function that allows rotation
                  will be my stretch goal.
              </p>
          </div>
          <div>
              <h3>The brief story of how I made this app.</h3>
              <p>
                  I built this app entirely in React.js. The first step was
                  creating the 8 X 8 grid by mapping through 2 arrays (for
                  horizontal and vertical numbering). This created 64 separate
                  tiles whose index I stored in an array.
              </p>
              <p>
                  This array was the base for calculating the location of the
                  rock and ice seen on the map. Random number generators created
                  an array for the rocks and ice that corresponded to the grid
                  numbers previously stored. Error handling prevents a rock and
                  ice image to occupy the same tile.
              </p>
              <p>
                  The trickiest part was calculating the location of the rover
                  at any time. While mapping out the original tiles, I stored
                  their x,y coordinates. Given the starting point of the rover
                  at (0, 0), movements in each direction represented an increase
                  or decrease of 1. Checking if the tiles coordinates matched
                  the rovers coordinates allowed the rendering of the rover.
              </p>
              <p>
                  Collision detection for the rocks(or capturing the ice), was
                  done in a similar way. By calculating the x,y coordinates of
                  the rocks and ice, I checked if the rovers x, y matched.
              </p>
          </div>
          <p>
              Checkout my{" "}
              <Link to="https://github.com/kaitlynw88/roverproject">
                  Github
              </Link>{" "}
              repository for this app.
          </p>
      </div>
  );
}

export default AboutPage