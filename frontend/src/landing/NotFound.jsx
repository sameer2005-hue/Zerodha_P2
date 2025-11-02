import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="text-center mt-5">
        <h3 className="mt-5">404 Page Not Found!</h3>
        <p className="signupText mt-4">Sorry, the page you are looking for does not exist.</p>
        <Link to="/">
          <button className="btns btn btn-primary mt-3 p-2 fs-5 mb-5">Go Home</button>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default NotFound