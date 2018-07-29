import React from 'react'
import _ from 'lodash'

import TrainingCard from '../../cards'

import StuffsImg from './images/facebookapp.jpg'

import Lessons from '../../../containers/lessons'


import './index.css'


/**
 * List of projects we'll be using to train
 * students on how to code.
 * In the near future, we'll collect this
 * data from graphql and wordpress
 */

// Clear benefits and value proposition
const Cbvp = () => (
  <section id="cvbp">
    <div className="row no-gutters full-image-t">
      <div className="col-xs-12 offset-md-5 col-md-6 col-p">
        <div className="row">
          <div className="col heading">
            <h2>Training Courses and Projects</h2>

            <p className="smaller-text">
              Our courses are holistic and leave nothing out. <br />Our intention is
              to take you through every step in creating fully working IT
              solution. 
              <br />Most of our projects are Javascript application but we
              also have projects that depend on Python scripts, Redis servers
              and even Elastic Search. <br />
              
            </p>
          </div>
        </div>
        <div className="row">
          {Lessons.map((p, i) => {
            return <div className="col-md-6 col-sm-12" key={_.kebabCase(p.cardTitle) + i.toString()}>
                <TrainingCard cardMeta={p} />
              </div>
          })}
        </div>
      </div>
    </div>
  </section>
)

export default Cbvp
