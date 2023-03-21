import React from "react";
import { Link } from "react-router-dom";


interface NavbarProps {
  brandName: string;
  logo: string;
}


export default function Navbar(navbarProps: NavbarProps) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black px-2 border-bottom border-2 border-white shadow-sm fixed-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            className="img-fluid me-2 border border-2 border-white rounded"
            style={{ height: "2em", width: "auto" }}
            src={navbarProps.logo}
            alt="logo"
          />
          <h3 className="fw-bold m-0" aria-current="page">
            {navbarProps.brandName}
          </h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                About
              </Link>
            </li>
            <a className="nav-link small text-white"
              href="https://hectormagana.art">
              <small>
                © 2023 B-Llage
              </small>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}
