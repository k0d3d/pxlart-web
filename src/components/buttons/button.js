import React from 'react'
import PropTypes from 'prop-types'

import { StyledBtn, StyledBtnA } from './styles'
import './btn.css'


const ButtonBtn = props => (
  <>
    { !props.atag ? (
      <StyledBtn
        className="btn"
        type="button"
        {...props}
      >
        {props.children ? props.children : props.btnText}
      </StyledBtn>
    ) : (
        <StyledBtnA
          className="btn"
          target="_blank"
          rel="nofollow"
          {...props}
        >
          {props.children ? props.children : props.btnText}
        </StyledBtnA>      
    )
    }

  </>
)

ButtonBtn.propTypes = {
  btnText: PropTypes.string,
}

export default ButtonBtn
