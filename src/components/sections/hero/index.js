import React from 'react'

import { lang } from '../../../lib/lang.en'
import './hero.css'
import ButtonBtn from '../../buttons/button'

const { title, subTitle, theHook, ctaButtonText } = lang.heroSection

const Hero = () => (
  <section id="hero">
    <div className="row no-gutters align-items-center">
      <div className="col-md-6 col-sm-12">
        <div className="main-title">
          <h1>{title}</h1>
          <h3>{subTitle}</h3>
          <p>{theHook}</p>
          <p>
            <ButtonBtn btnred btnhomeherocta>
              {ctaButtonText}
            </ButtonBtn>
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