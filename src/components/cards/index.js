import React from 'react'
import PropTypes from 'prop-types'

import './cards.css'

const TrainingCard = props => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{props.cardMeta.cardTitle}</h5>
      <p className="card-text">{props.cardMeta.description}</p>
    </div>
    <div className="card-footer">
      <a href="#" className="btn btn-xs btn-purplish">
        {'Purchase this ' + props.cardMeta.premiumTrainingPurchase}
      </a>
    </div>
  </div>
)

TrainingCard.propTypes = {
  cardMeta: PropTypes.shape({
    cardTitle: PropTypes.string,
    description: PropTypes.string,
  })

}

export default TrainingCard