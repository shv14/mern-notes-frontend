import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar(props) {
    let location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg text-dark font-weight-bold" style={{ backgroundColor: "#6dc09a" }} >
            <div className="container-fluid">
                <a className="navbar-brand font-weight-bolder" href="/mern-notes-frontend">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/mern-notes-frontend" ? "active" : ""}`} aria-current="page" to="/mern-notes-frontend">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">{props.Page1}</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2 rounded-pill" type="search" placeholder="Search" onChange={props.search} aria-label="Search" />
                        <form className="d-flex">
                            <Link className="btn bt-lg bg-dark text-light rounded-pill mx-1" role="button" to="/login" >Login</Link>
                            <Link className="btn bt-lg bg-dark text-light rounded-pill mx-1" role="button" to="/SignUp" >SignUp</Link>
                        </form>
                    </form>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    Page1: PropTypes.string
}

Navbar.defaultProps = {
    title: "Set title here",
    Page1: "About"
}
