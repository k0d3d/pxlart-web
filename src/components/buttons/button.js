import React from 'react'
import PropTypes from 'prop-types'

import { StyledBtn } from './styles'
import './btn.css'

const ButtonBtn = props => (
  <>
    <StyledBtn
      className="btn"
      type="button"
      {...props}
    >
      {props.children ? props.children : props.btnText}
    </StyledBtn>

  </>
)

ButtonBtn.propTypes = {
  btnText: PropTypes.string,
}

export default ButtonBtn
