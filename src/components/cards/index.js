import React from 'react'
import PropTypes from 'prop-types'

import { StyledCard } from './style'
import ButtonBtn from '../buttons/button'
import './cards.css'

//9010f072421c44f492f167d8ba2a6951
// https://openexchangerates.org/api/latest.json?app_id= ?symbols

const TrainingCard = props => (
  <StyledCard className="card t-card">
    <div className="card-body">
      <h5 className="card-title">{props.cardMeta.title}</h5>
      <p className="card-text">{props.cardMeta.description}</p>
      <p>{
          props.cardMeta.stack.map((s, i) => (<span key={`stackpill-${i}`} className="badge badge-pill badge-link">{s}</span>))
        }
      </p>
    </div>
    <div className="card-footer">
      <ButtonBtn href={ props.cardMeta.paymentPageUrl } className="btn btn-xs btn-purplish">
       {props.cardMeta.buttonText } - { props.cardMeta.courseCost }
      </ButtonBtn>
    </div> 
  </StyledCard>
)

TrainingCard.propTypes = {
  cardMeta: PropTypes.shape({
    cardTitle: PropTypes.string,
    description: PropTypes.string,
  })

}

export default TrainingCard