import React from 'react';
import { Link } from 'react-router-dom';
// import {FiArrowRightCircle} from "react-icons/Fi";

export const Header = () => {
  return (
  <div>
    
    <nav className="navbar navbar-expand-lg header px-5">
      <div className="container">
        <a className="navbar-brand" href="/"><img className='bc-logo img-fluid' src="../bc new logo.svg"  width={188} height={70}   alt="logo" /></a>

        <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu"         aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id='navmenu'>
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item mx-2">
              <a className="nav-link active item" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link item" href="/services">Services</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link item" href="/about">About Us</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link item" href="/blog">Blog</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link item" href="/contact">Contact</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link item" href="/career">Career</a>
            </li>
            <li className="nav-item mx-2">
              <div className="get-started">
                <a className='text-decoration-none' href="/contact"><button className='button d-flex justify-content-center align-items-center gap-2 '><span>Get Started</span>
                 
                </button></a>
              </div>
            </li>
          </ul>

          
        </div>
      </div>
    </nav>
  </div>
  )
}
