import React from "react"

import ButtonBtn from '../../buttons/button'

import './fc.css'

const FoundationClassSection = () => (
  <section id="foundation-class">
    <div className="row">
      <div className="col foundation-sale">
        <h4>
          Enrollment is open for <br />August
        </h4>
        <h1>Foundation Class in Programming <br />using Javascript</h1>
        <h5>Introduction into Web Development</h5>
        <ButtonBtn btnText="Training" btnClasses=" btn-outline-secondary" />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="centered-box">
          <div className="row no-gutters">
            <div className="col-6">
              <div className="comfy-borders">
                <h5>What does this training offer ?</h5>
              </div>
              <div className="comfy-borders">
                <article>
                  This course is designed for entry level programmers. Our
                  curriculum is 100% remote-proof. This means you can take
                  lessons and video trainings from your comfort. <br />
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
                  We can gaurantee after completing our training programs, you
                  can start your own freelance web design gigs or a blog or a
                  personal project you have been dreaming about.
                </article>
              </div>
            </div>
            <div className="col-6" />
          </div>
          <div className="row">
            <div className="col">
              <ButtonBtn btnClasses="btn-red">Enroll Now</ButtonBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default FoundationClassSection