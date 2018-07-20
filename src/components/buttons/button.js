import React from 'react'
import PropTypes from 'prop-types'

import './btn.css'

const ButtonBtn = props => (
  <>
    <button
      className={' btn ' + props.btnClasses}
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {props.children ? props.children : props.btnText}
    </button>

  </>
)

ButtonBtn.propTypes = {
  btnText: PropTypes.string,
  btnClasses: PropTypes.string,
}

export default ButtonBtn
