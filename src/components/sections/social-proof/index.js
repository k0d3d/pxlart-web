import React from 'react'
import _ from 'lodash'
import TweetEmbed from 'react-tweet-embed'

import './index.css'

const tweetList = [
  '1018907963015102465',
  '1021041430750539776',
  '1020022699027058691',
]



class SocialProof extends React.Component {


  render() {
    return (
      <section id="social-proof-section" className="">
        <div className="row">
          <div className="col">
            <h2>Success Stories </h2>
            <h5 className="mb-5">from people who learnt to code.</h5>
          </div>
        </div>
        <div className="row justify-content-center">
          {tweetList.map((p, i) => {
            return <div key={_.uniqueId()} className="col-md-4 col-sm-12">
                <TweetEmbed id={p} />
              </div> 
          })}
        </div>
      </section>
    )
  }
}

export default SocialProof
