import React from 'react'

import herovector from './images/herovector.svg'
import './hero.css'
import ButtonBtn from '../../buttons/button'


const Hero = () => (
  <section id="hero">

    <div className="row no-gutters align-items-center">
      <div className="col">
        <div className="main-title">
          <h1>Learn to code</h1>
          <h3>high performance web applications.</h3>
          <p>
            Go from novice to expert in our 12 weeks training program on Javascript, JAMstack
            and Wordpress.
          </p>
          <p>
            <ButtonBtn btnClasses="btn-red btn-bold" btnText='Enroll today'></ButtonBtn>
          </p>

        </div>
      </div>
      <div className="col">
        <figure className="hero-vector-img ml-auto">
          <img src={herovector} alt="coding is fun here" />
        </figure>
      </div>
    </div>
  </section>
)

export default Hero