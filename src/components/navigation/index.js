import React from'react'

import Logo from './logo.png'
import './nav.css'

import DropdownBtn from '../buttons/dropdown'
import ButtonBtn from '../buttons/button'

class NavBar extends React.Component {

  constructor (props){
    super(props)
    this.state = {
      showMenu: false
    }
    this.showMenu = this.showMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this);

  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: !this.state.showMenu }, () => {
      document.addEventListener('click', this.closeMenu)
    })    
  }
  closeMenu() {
    console.log('closing menu')
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });

  }  

  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="https://pxlart.design" >
          <img src={Logo} alt='pxlart logo' />
        </a>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <DropdownBtn 
              btnText="Code Camp" 
              btnxs 
              showmenu={this.state.showMenu}
              onClick={this.showMenu}
            >
              <li> 
                <ButtonBtn className="btn-outline-primary" btnxs btnText="iXit" atag href="//ixit.com.ng">

                </ButtonBtn>
              </li>
              <li> 
                <ButtonBtn className="btn-outline-primary" btnxs btnText="CodeCamp" atag href="/codecamp">

                </ButtonBtn>
              </li>
              <li> 
                <ButtonBtn className="btn-outline-primary" btnxs btnText="Consulting" atag href="/"> 

                </ButtonBtn>
              </li>

            
            </DropdownBtn>
          </li>

        </ul>
      </nav>
    )
  }
}


export default NavBar
