import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import "../styles/Header.css"

function Header() {
  return (
      <div className="header">
          <h1>
              <Link to="/">Mars Rover</Link>
          </h1>
          <nav className="navBar">
              <Link to="about">About</Link>
              <div className="navSocials">
                  <Link to={"https://github.com/kaitlynw88/roverproject"}>
                      <FontAwesomeIcon className="socialIcon" icon={faGithub} />
                  </Link>
                  <Link to={"https://www.linkedin.com/in/kaitlyn-wickson/"}>
                      <FontAwesomeIcon
                          className="socialIcon"
                          icon={faLinkedin}
                      />
                  </Link>
              </div>
          </nav>
      </div>
  );
}

export default Header