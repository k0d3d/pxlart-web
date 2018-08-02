import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'
import TrainingCard from '../../cards'

import Lessons from '../../../containers/lessons'


import './index.css'

const StyledColp = styled.div`
  background-color: white;
  padding: 20px;
  margin-bottom: 40px;
`

/**
 * List of projects we'll be using to train
 * students on how to code.
 * In the near future, we'll collect this
 * data from graphql and wordpress
 */

// Clear benefits and value proposition
const Cbvp = () => (
  <section id="cvbp">
    <div className="row full-image-t">
      <StyledColp className="col-xs-12 offset-md-5 col-md-6 col-p">
        <div className="row">
          <div className="col heading">
            <h2>Training Courses and Projects</h2>

            <p className="smaller-text">
              Our courses are holistic and leave nothing out. <br />
              Our intention is to take you through every step in creating fully
              working IT solution.
              <br />
              Most of our projects are Javascript application but we also have
              projects that depend on Python scripts, Redis servers and even
              Elastic Search. <br />
            </p>
          </div>
        </div>
        <div className="row">
          {Lessons.map((p, i) => {
            return (
              <div
                className="col-md-6 col-sm-12"
                key={_.kebabCase(p.cardTitle) + i.toString()}
              >
                <TrainingCard cardMeta={p} />
              </div>
            )
          })}
        </div>
      </StyledColp>
    </div>
  </section>
)

export default Cbvp
