import React from 'react'

import { lang } from '../../../lib/lang.en'
import './index.css'

const webinar_en = lang.webinars

const WebinarSection = () => (
  <section id="webinar-section" className="webinar-section">
    <div className="row no-gutter">
      <div className="col-md-6 offset-md-6 col-xs-12 p-5">
        <h2>Subscribe to join our Webinar</h2>
        {webinar_en.content}
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="your email address"
            />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">
                &nbsp;Are you ok with getting emails updates about training programs ?
            </label>
          </div>
          <div className="form-group mt-2">
            <button className="btn btn-block btn-blue">Sign me up</button>
          </div>
        </form>
      </div>
    </div>
  </section>
)

export default WebinarSection
