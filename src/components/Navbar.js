import React from 'react'

import "./Navbar.css"
import { FaBars } from 'react-icons/fa';
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#"> <img className="logo" src="{logo}" alt="company logo" /> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FaBars style={{color: "#0CF0DD"}}/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">About me</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">How work</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Portfolio</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                
                </div>
            </nav>  
        </>
    )
}

export default Navbar
