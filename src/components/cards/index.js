import React from 'react'
import PropTypes from 'prop-types'

import './cards.css'

const TrainingCard = props => (
  <div className="card">
    <img
      className="card-img-top"
      src={props.cardMeta.imageThumbnail}
      alt={props.cardMeta.cardTitle}
    />
    <div className="card-body">
      <h5 className="card-title">{props.cardMeta.cardTitle}</h5>
      <p className="card-text">{props.cardMeta.description}</p>
      <a href="#" className="btn btn-primary">
        {'Purchase this' + props.cardMeta.premiumTrainingPurchase}
      </a>
    </div>
  </div>
)

TrainingCard.propTypes = {
  cardMeta: {
    cardTitle: PropTypes.string,
    description: PropTypes.string,
  }
}

// class TrainingCard extends React.Component {

//   constructor(props) {
//     super(props)
//   }

//   render () {
//     return (
//       <div className="card">
//         <img className="card-img-top" src="..." alt="Card image cap" />
//           <div className="card-body">
//             <h5 className="card-title">Card title</h5>
//             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <a href="#" className="btn btn-primary">Go somewhere</a>
//           </div>
//       </div>
//     )
//   }
// }

export default TrainingCard