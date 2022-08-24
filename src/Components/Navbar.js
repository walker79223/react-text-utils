import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-dark navbar-dark`}>
        <div className="container-fluid ">
          <Link className={`navbar-brand text-light`} to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link text-light active`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-light`} to="/about">{props.aboutText}</Link>
              </li>
            </ul>
            <div className="d-flex">
              <div className="bg-primary rounded mx-2" style={{ height: '30px', width: '30px', cursor: 'pointer' }} onClick={() => { props.toggleMode('primary') }}></div>
              <div className="bg-danger rounded mx-2" style={{ height: '30px', width: '30px', cursor: 'pointer' }} onClick={() => { props.toggleMode('danger') }}></div>
              <div className="bg-secondary rounded mx-2" style={{ height: '30px', width: '30px', cursor: 'pointer' }} onClick={() => { props.toggleMode('secondary') }}></div>
              <div className="bg-light rounded mx-2" style={{ height: '30px', width: '30px', cursor: 'pointer' }} onClick={() => { props.toggleMode('light') }}></div>
              <div className="bg-warning rounded mx-2" style={{ height: '30px', width: '30px', cursor: 'pointer' }} onClick={() => { props.toggleMode('warning') }}></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
Navbar.propTypes = {
  title: PropTypes.string
}
