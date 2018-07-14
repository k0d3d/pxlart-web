import React from 'react'

const WebinarSection = () => (
  <section id="webinar-section">
    <div className="row">
      <h5>
        Join our Webinar
      </h5>
      <p>
        Twice a month, we host a live webinar on Hangouts / Skype / Slack. Here you can discuss project ideas, career advice, 
        money making ideas, annoying problems 
        and learn from instructors and with other trainees. Its a great way to fill in the blanks. Sessions are usually within working 
        hours and last about 3 hours.

      </p>
      <p>
        It is usually $8 to join the session, but we want you to try it out as a first time participant. Register below and we 
        will send you the invitation link to join
      </p>
      <p></p>
    </div>
    <div className="row">
      <form>
        <div className="form-group">
          <input type="email" className="form-control" placeholder="your email" />
        </div>
      </form>
    </div>
  </section>
)

export default WebinarSection