import React from 'react'

import ButtonBtn from '../../buttons/button'
import './index.css'

const WhyHook = () => (
  <section id="why-hook">
    <div className="row">
      <div className="col-md-5 col-xs-12 p-50">
        <div className="row">
          <div className="col">
            <h1>Why you should learn to code here</h1>
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
              <ButtonBtn btnText="Read stories" btnClasses="btn-outline-primary btn-xs" />
            </p>
          </div>
          <div className="w-100" />
          <div className="col">
            <h5>Expert Instructors</h5>
            <p>
              With 8 years of designing websites and building web applications,
              we want to share our experience and help you move up your career
              and stay up-to-date with what tech can offer you.
            </p>
            <p>
              You will learn to rapidly build solutions by leveraging existing
              javascript technologies like MongoDB, React, Electron and Wordpress more.
            </p>
          </div>
          <div className="w-100" />
          <div className="col">
            <h5>Why Javascript?</h5>
            <p>
              JavaScript is the digital equivalent of the English language in
              the sense that it's universally recognized. JavaScript is present in every platform imaginable —
              browsers, mobile and desktop applications, IoT devices, and more!
            </p>
          </div>

        </div>
      </div>
      <div className="col-7 right-image-fade" >
        <div className="extra-box"></div>
      </div>
    </div>
  </section>
)

export default WhyHook
