import React from "react"
import {Link} from "react-router-dom"

export default function Navbar() {
    return(
        <div>
            <nav className="navbar navbar-expand-sm bg-body-tertiary shadow">
                <div className="container-fluid">
                    <a className="navbar-brand text-warning" href="#">YOGA STUDIO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="about">About</Link>
                        <Link className="nav-link" to="councel">Councelling</Link>
                        <Link className="nav-link" to="allyoga">All Yoga</Link>
                        <Link className="nav-link" to="faq">FAQ</Link>
                        <Link className="nav-link" to="register">Register</Link>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}