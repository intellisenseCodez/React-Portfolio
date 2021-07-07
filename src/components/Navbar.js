import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./Navbar.css"

import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand logo" href="#">Axiom</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li><a href="#" data-scroll-nav="0" class="active">Home</a></li>
                        <li><a href="#" data-scroll-nav="1">About</a></li>
                        <li><a href="#" data-scroll-nav="2">Services</a></li>
                        <li><a href="#" data-scroll-nav="3">Works</a></li>
                        <li><a href="#" data-scroll-nav="4">Clients</a></li>
                        <li><a href="#" data-scroll-nav="5">Blog</a></li>
                        <li><a href="#" data-scroll-nav="6">Contact</a></li>    
                    </ul>
                </div>
            </div>
            </nav>

        </>
    )
}

export default Navbar
