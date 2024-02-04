import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function Navbar(props) {
    return (
        <nav
            className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        >
            <Link className="navbar-brand" to="/">
                {props.tittle}
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="/navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <Link className="nav-link" to="/">
                            Home <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">
                            {props.about}
                        </Link>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="/"
                            role="button"
                            data-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Dropdown
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/">
                                Action
                            </a>
                            <a className="dropdown-item" href="/">
                                Another action
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">
                                Something else here
                            </a>
                        </div>
                    </li> */}
                </ul>
                {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
    </form> */}
                <div className="custom-control custom-switch">
                    <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customSwitch1"
                        onClick={props.togglemode}
                    />
                    <label
                        className={`custom-control-label text-${
                            props.mode === "light" ? "dark" : "light"
                        }`}
                        htmlFor="customSwitch1"
                    >
                        Enable Dark Mode
                    </label>
                </div>
            </div>
        </nav>
    );
}

// This is used for specifying the types of props that is declared in app.js
Navbar.propTypes = {
    tittle: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
};

// This is used for set default values to props
Navbar.defaultProps = {
    tittle: "Singh",
    about: "About",
};
