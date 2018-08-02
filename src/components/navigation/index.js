import React from'react'

import Logo from './logo.png'
import './nav.css'

import DropdownBtn from '../buttons/dropdown'

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand" href="https://pxlart.design" >
      <img src={Logo}  alt='pxlart logo'/>
    </a>
    <DropdownBtn btnText="Code Camp" btnxs></DropdownBtn>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#courses">Consulting <span className="sr-only">(current)</span></a>
        </li>

      </ul>

    </div>
  </nav>  
)
export default NavBar
