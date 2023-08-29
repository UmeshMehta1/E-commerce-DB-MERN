//import React from 'react'
import '../App.css'
import { Link} from 'react-router-dom';

export default function Nav() {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" to="#">Logo</a>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog">Blog</Link>
        </li>
      </ul>
      <button type="button" className="btn btn-primary btn-lg m-3">
      <Link to="/login">Login</Link>
      </button>
      <button type="button" className="btn btn-secondary btn-lg">
      <Link to="/signup">Signup</Link>
      </button>
      
    </div>
  </div>
</nav>

    </>
  )
}
