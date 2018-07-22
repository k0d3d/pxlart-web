import React from 'react'
import _ from 'lodash'

import TrainingCard from '../../cards'

import StuffsImg from './images/facebookapp.jpg'

import './index.css'


/**
 * List of projects we'll be using to train
 * students on how to code.
 * In the near future, we'll collect this
 * data from graphql and wordpress
 */
const listOfProjects = [
  {
    cardTitle: 'Foundation Javascript',
    description: 'Entry level training on how to code for beginners.',
    repo: 'https://github.com/k0d3d/stuffs',
    stack: ['HTML5', 'CSS3', 'Javascript / ES6', 'Bash / CMD', 'Toolchain'],
    premiumTrainingPurchase: 150,
    imageThumbnail: StuffsImg,
  },
  {
    cardTitle: 'Stuffs',
    description:
      'Extensive Inventory Management App built to manage inventory for Pharmacies.',
    repo: 'https://github.com/k0d3d/stuffs',
    stack: [
      'AngularJS',
      'Redis',
      'MongoDB',
      'NodeJs',
      'Electron Js',
      'Express Js',
      'Passport Js',
    ],
    premiumTrainingPurchase: 150,
    imageThumbnail: StuffsImg,
  },
  {
    cardTitle: 'Promomonger.com',
    description:
      'An ecommerce site for fresh food delivery and kitchen utensils built with Wordpress and Woocommerce',
    repo: 'https://github.com/k0d3d/promomonger',
    stack: ['Wordpress', 'WooCommerce', 'PWA'],
    premiumTrainingPurchase: 150,
    imageThumbnail: StuffsImg,
  },
  {
    cardTitle: 'IWAC',
    description:
      'iXit Web Application Client allows users download user uploaded music, videos and other files.',
    repo: 'https://github.com/k0d3d/iwac',
    stack: [
      'AngularJS',
      'Redis',
      'MongoDB',
      'NodeJs',
      'Express Js',
      'Passport Js',
    ],
    premiumTrainingPurchase: 150,
    imageThumbnail: StuffsImg,
  },
  {
    cardTitle: 'iXit Bot',
    description:
      "iXit web scraper codename IASS , Built in Python's Scrapy and also in NodeJs using multiple scraping engines including PhantomJs ",
    repo: 'https://github.com/k0d3d/ixitbot',
    stack: [
      'Redis',
      'MongoDB',
      'NodeJs',
      'Express Js',
      'Python',
      'Scrapy',
      'Phanton Js',
    ],
    premiumTrainingPurchase: 150,
    imageThumbnail: StuffsImg,
  },
]

// <li>Shotgun - ReactJs </li>
// <li>IWAC - iXit Web Application Client </li>
// <li>iXit Bot - Web Data Scraper built in Nodejs and Python </li>
//       </ul >

// Clear benefits and value proposition
const Cbvp = () => (
  <section id="cvbp">
    <div className="row no-gutters full-image-t">
      <div className="col-xs-12 offset-md-5 col-md-6 col-p">
        <div className="row">
          <div className="col heading">
            <h1>Training Courses and Projects</h1>

            <p className="smaller-text">
              Our courses are holistic and leave nothing out. <br />Our intention is
              to take you through every step in creating fully working IT
              solution. 
              <br />Most of our projects are Javascript application but we
              also have projects that depend on Python scripts, Redis servers
              and even Elastic Search. <br />
              
            </p>
          </div>
        </div>
        <div className="row">
          {listOfProjects.map((p, i) => {
            return <div className="col-md-6 col-sm-12" key={_.kebabCase(p.cardTitle) + i.toString()}>
                <TrainingCard cardMeta={p} />
              </div>
          })}
        </div>
      </div>
    </div>
  </section>
)

export default Cbvp
