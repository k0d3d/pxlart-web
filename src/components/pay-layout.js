import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { lang } from '../lib/lang.en'
const { siteTitle, metaDescription, metaKeywords } = lang


const PayLayout = () => (
  <Helmet>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content={metaDescription} />
    <meta name="keywords" content={metaKeywords} />
    <meta name="author" content="Pxlart Design" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

    <title>{siteTitle}</title>    
  </Helmet>
)