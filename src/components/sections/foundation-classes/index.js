import React from "react"

import ButtonBtn from '../../buttons/button'
import lang from '../../../lib/lang.en'

import './fc.css'

const { teaserText, title, subTitle } = lang.foundationClass

const FoundationClassSection = () => (
  <section id="foundation-class">
    <div className="row">
      <div className="col foundation-sale">
        <h4>{teaserText}</h4>
        <h1>{title}</h1>
        <h5>{subTitle}</h5>
        <ButtonBtn
          btnText="Training"
          btnxs
        />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="centered-box">
          <div className="row no-gutters">
            <div className="col-md-6 col-sm-12">
              <div className="comfy-borders">
                <h5>What does this training offer ?</h5>
              </div>
              <div className="comfy-borders">
                <article>
                  This course is designed for entry level programmers. Our
                  curriculum is 100% remote. This means you can take lessons and
                  video trainings from your comfort. <br />
                  <br />
                </article>
              </div>
              <div className="comfy-borders">
                <h5>From novice to pro</h5>
              </div>
              <div className="comfy-borders">
                <article>
                  Training Projects cover learning basic programming concepts
                  all the way to interesting objectives like creating games and
                  even building data driven applications.
                </article>
              </div>
              <div className="comfy-borders">
                <h5>Our gaurantees</h5>
              </div>
              <div className="comfy-borders">
                <article>
                  We can guarantee after completing our training programs, you
                  can start your own freelance web design gigs or a blog or a
                  personal project you have been dreaming about.
                </article>
              </div>
            </div>
            <div className="col-6" />
          </div>
          <div className="row">
            <div className="col">
              <ButtonBtn
                href="https://paystack.com/pay/intro2js"
                target="_blank"
                rel="noopener noreferrer"
                className="btn d-md-inline-block"
                btnred
              >
                Enroll Now for N35,000 per month
              </ButtonBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default FoundationClassSection