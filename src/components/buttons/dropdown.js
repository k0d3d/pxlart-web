import React from 'react'
import PropTypes from 'prop-types'

import { StyledBtnBlueOutline } from './styles'


const DropdownBtn = props => (
  <div className={props.showmenu ? 'dropdown show' : 'dropdown'}>
    <StyledBtnBlueOutline
      className="btn"
      type="button"
      id="dropdownMenuButton"
      {...props}
    >
      {props.btnText}
      <figure>
        <svg
          width="14"
          height="11"
          viewBox="0 0 14 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.7517 5.21739L11.6279 4.29783L7.17282 7.93696V0H5.57886V7.93696L1.13171 4.2913L0 5.21739L6.37584 10.4348L12.7517 5.21739Z"
            transform="translate(0.550293 0.521759)"
            fill="#2F64ED"
          />
        </svg>
      </figure>
    </StyledBtnBlueOutline>
    {props.showmenu ? (
      <div className="dropdown-menu">{props.children}</div>
    ) : null}
  </div>
)

DropdownBtn.propTypes = {
  btnText: PropTypes.string,
  btnSize: PropTypes.string,
  btnClasses: PropTypes.string
}



export default DropdownBtn