import React from 'react'
import PropTypes from 'prop-types'

import './cards.css'

//9010f072421c44f492f167d8ba2a6951
// https://openexchangerates.org/api/latest.json?app_id= ?symbols

const TrainingCard = props => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{props.cardMeta.title}</h5>
      <p className="card-text">{props.cardMeta.description}</p>
      <p>{
          props.cardMeta.stack.map(s => (<span className="badge badge-pill badge-link">{s}</span>))
        }
      </p>
    </div>
    <div className="card-footer">
      <a href={ props.cardMeta.paymentPageUrl } className="btn btn-xs btn-purplish">
       {props.cardMeta.buttonText } - { props.cardMeta.courseCost }
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