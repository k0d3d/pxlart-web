import React from 'react';
// import Link from 'gatsby-link'
import {lang} from '../../../lib/lang.en'
import './index.css'

const {title, content} = lang.homeSection

const HomeSection = () => (
  <section id="home-section">
    <div className="row">
      <div className="col-md-6">
      
        <div className="inside-split-text p-5">
          <h1>
          {
            title
          }
          </h1>
          {
            content
          }

          <a id="anchor" className="ibtn light-btn" href="#2">Book Consultation <span></span></a>

        </div>
      </div>
      <div className="col-md-6">
        
      </div>
    </div>

  </section>
)

export default HomeSection