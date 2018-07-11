import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'


import 'bootstrap/dist/css/bootstrap.min.css'
import './layout.css'


const TemplateWrapper = ({ children }) => (
  <>
    <Helmet>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Learn to build high performance javascript applications. Our training includes courses and projects for front end development and Wordpress" />
        <meta name="keywords" content="Learn to build high performance javascript applications. Our training includes courses and projects for front end development and Wordpress" />
        <meta name="author" content="Pxlart Design" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta property="og:title" content="Learn to build high performance javascript applications. Our training includes courses and projects for front end development and Wordpress." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://pxlart.design" />
        <meta property="og:image" content="/static/images/fav-icon/favicon.png" alt title="this is the title" />
        <meta property="og:description" content="Pxlart design - Learn to build high performance javascript applications. Our training includes courses and projects for front end development and Wordpress" />


        <title>
          Pxlart Design Web Development Training
        </title>

        <link href="https://fonts.googleapis.com/css?family=Bree+Serif|Montserrat" rel="stylesheet" />
        <link rel="icon" type="image/png" sizes="56x56" href="/static/images/fav-icon/favicon.png" />    
    </Helmet>
  
    <div>
      {children}
    </div>
  </>
)

TemplateWrapper.propTypes = {
  children: PropTypes.any,
}

export default TemplateWrapper
