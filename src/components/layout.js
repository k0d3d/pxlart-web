import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/layout.css'
import '../styles/media.css'
import { lang } from '../lib/lang.en'


class TemplateWrapper extends React.Component {

  componentDidMount() { 
    const s = document.createElement('script')
    const bodyTag = document.getElementsByTagName('body')[0]
    s.type = 'text/javascript'
    s.async = true
    s.innerHTML = `window.$crisp=[];window.CRISP_WEBSITE_ID="298fbb6a-f9c8-44cd-b98f-472b7a365be8";(function(){d = document; s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`
    bodyTag.appendChild(s)
  }

  render() {
    const { siteTitle, metaDescription, metaKeywords } = lang
    return <>
        <Helmet>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content={ metaDescription } />
          <meta name="keywords" content={ metaKeywords } />
          <meta name="author" content="Pxlart Design" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta property="og:title" content="Learn to build high performance javascript applications. Our training includes courses and projects for front end development and Wordpress." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://pxlart.design" />
          <meta property="og:image" content="/static/images/fav-icon/favicon.png" alt title="this is the title" />
          <meta property="og:description" content="Pxlart design - Learn to build high performance javascript applications. Our training includes courses and projects for front end development and Wordpress" />

          <title>{ siteTitle }</title>

          <link href="https://fonts.googleapis.com/css?family=Comfortaa|Raleway:400,800|Fredoka+One" rel="stylesheet" />
          <link rel="icon" type="image/png" sizes="56x56" href="/static/images/fav-icon/favicon.png" />
        </Helmet>

        <div>{this.props.children}</div>
      </>
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.any,
}

export default TemplateWrapper
