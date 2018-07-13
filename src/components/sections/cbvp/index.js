import React from 'react'

import TrainingCard from '../../cards'

const listOfProjects = [{
  name: 'Stuffs',
  description: 'Inventory Management App'
}]

// Clear benefits and value proposition
const Cbvp = () => (
  <section id="cvbp">
    <div className="row">
      <div className="col-4">
        <h3>
          Training Courses and Projects
        </h3>
        <ul>
          <li>Learn from working examples</li>
          <li>Learn a lot more than Javascript. </li>
          <li>Extensive use-cases</li> 
        </ul>
        <p>
          Our courses are wholistic and leave nothing out. Our intention is to take you through every step
          in creating fully working IT solution. Most of our projects are Javascript application but we also have 
          projects that depend on Python scripts, Redis servers and even Elastic Search.
          You will learn about basic algorithms...
          Learn to create web application and design websites using HTML5 or Wordpress for 
          different reasons like an Ecommerce site, or a CRM or an Inventory App.
        </p>

      </div>
      <div className="col-8">
        <TrainingCard></TrainingCard>
        <ul>
          <li>Stuffs - Inventory Management App</li>
          <li>Abita - </li>
          <li>Promomonger.com - Wordpress / WooCommerce Ecommerce site</li>
          <li>Shotgun - ReactJs </li>
          <li>IWAC - iXit Web Application Client </li>
          <li>iXit Bot - Web Data Scraper built in Nodejs and Python </li>
        </ul>
      </div>
    </div>
  </section>

)

export default  Cbvp