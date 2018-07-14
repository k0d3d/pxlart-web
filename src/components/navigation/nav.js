import React from'react'

import Logo from './brand.png'
import './nav.css'

import DropdownBtn from '../buttons/dropdown'

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand" >
      <img src={Logo}  alt='pxlart logo'/>
    </a>
    <DropdownBtn btnText="Training" btnSize="btn-xs" btnClasses="btn-blue-outline"></DropdownBtn>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" ariaControls="navbarSupportedContent" ariaExpanded="false" ariaLabel="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#courses">Courses <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#staff-training">for Companies</a>
        </li>
        <li>
          <a className="nav-link" href="#outcomes">Outcomes</a>
        </li>
        <li>
          <a href="#signin" className="nav-link">Sign In</a>
        </li>  
        <li>
          <a href="#enroll" className="nav-link btn-underlined">Get Started</a>
        </li>  

      </ul>

    </div>
  </nav>  
)
export default NavBar
