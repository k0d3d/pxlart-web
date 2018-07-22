import React from 'react'

import herovector from './images/herovector.svg'
import './hero.css'
import ButtonBtn from '../../buttons/button'


const Hero = () => (
  <section id="hero">
    <div className="row no-gutters align-items-center">
      <div className="col-md-6 col-sm-12">
        <div className="main-title">
          <h1>Learn to code</h1>
          <h3>high performance web applications.</h3>
          <p>
            Go from novice to expert in our 12 weeks training program on
            Javascript, JAMstack and Wordpress.
          </p>
          <p>
            <ButtonBtn
              btnClasses="btn-red btn-home-hero-cta"
              btnText="Enroll today"
            />
          </p>
        </div>
      </div>
      <div className="col-md-6 col-sm-12">
        <div className="hero-vector-img ml-auto" />
      </div>
    </div>
  </section>
)

export default Hero