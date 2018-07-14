import React from 'react'

import Layout from '../components/layout'
import NavBar from '../components/navigation/nav'
import Hero from '../components/sections/hero'
import WhyHook from '../components/sections/whyhook'
import Cvbp from '../components/sections/cbvp'
import WebinarSection from "../components/sections/webinars";
import FoundationClass from '../components/sections/foundation-classes'
import ContactSection from '../components/sections/contact'
  

const IndexPage = () => (
  <Layout>
    <div className='container'>
      <NavBar></NavBar>
      <Hero></Hero>
      <FoundationClass></FoundationClass>
      <WhyHook></WhyHook>
      <Cvbp></Cvbp>
      <WebinarSection></WebinarSection>
      <ContactSection></ContactSection>
    </div>
  </Layout>
)

export default IndexPage
