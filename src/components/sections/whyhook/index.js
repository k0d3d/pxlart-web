import React from 'react'

import ButtonBtn from '../../buttons/button'

const WhyHook = () => (
  <section id="why-hook">
    <div className="row">
      <div className="col-6">
        <h3>Why you should learn to code here</h3>
        <h5>More opportunities</h5>
        <p>
          In a constantly advancing world, having tech skills, especially
          coding, can be your ticket to better personal and professional
          opportunities.
        </p>
        <p>
          Learning to code has made life better for people who seek an
          alternative career. Read about how this changed the life of two
          people.
        </p>
        <p>
          <ButtonBtn btnText="Read stories" btnClasses="btn-xs" />
        </p>
      </div>
      <div className="w-100"></div>
      <div className="col-6">
        <h5>Expert Instructors</h5>
        <p>
          With 8 years of designing websites and building web applications, we want
          to share our experience and help you move up your career and stay
          up-to-date with what tech can offer you.
        </p>
        <p>
          You will learn to rapidly build solutions by leveraging existing
          javascript technologies like MongoDB, React, Electron and more.
        </p>
      </div>
      <div className="w-100"></div>
      <div className="col-6">
        <h5>Why Javascript?</h5>
        <p>
          JavaScript is the digital equivalent of the English language in the
          sense that it's universally recognized. It's also weaved into the
          fabric of programming. You see it everywhere; you're just not aware of
          it. JavaScript is present in every platform imaginable — browsers,
          mobile and desktop applications, IoT devices, and more!
        </p>
      </div>
    </div>
  </section>
)

export default  WhyHook