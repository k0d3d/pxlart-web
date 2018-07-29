import React from 'react'

import './index.css'

const WebinarSection = () => (
  <section id="webinar-section" className="webinar-section">
    <div className="row no-gutter">
      <div className="col-md-6 offset-md-6 col-xs-12 p-5">
        <h2>Subscribe to join our Webinar</h2>
        <p>
          Twice a month, we host a live webinar on Hangouts / Skype / Slack.<br />
          Here you can discuss project ideas, career advice, money making ideas,
          annoying problems and learn from expert instructors and with other
          trainees.<br />
          Its a great way to fill in the blanks. Webinar sessions are usually
          within working hours and last about 3 hours.
        </p>
        <p>
          Webinar sessions are free for trainees and $5 for non-trainees.<br/> If
          this is your first time, you get a free session. <br />Register below and we
          will send you the invitation link to join.
        </p>
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
