import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
        <h2>Error</h2>
        <p>
            Looks like you're lost in space.
        </p>
        <Link to={"/"}>
            Return to Mars
        </Link>
    </div>
  )
}

export default ErrorPage