import React from 'react'

import Layout from '../components/layout'
import NavBar from '../components/navigation/nav'
import Hero from '../components/sections/hero'
import WhyHook from '../components/sections/whyhook'
import Cvbp from '../components/sections/cbvp'
import WebinarSection from "../components/sections/webinars";
import FoundationClass from '../components/sections/foundation-classes'
import ContactSection from '../components/sections/contact'
import SocialProof from '../components/sections/social-proof'
import Footer from '../components/footer'
  

const IndexPage = () => (
  <Layout>
    <div className='container'>
      <NavBar></NavBar>
      <main>
        <Hero></Hero>
        <FoundationClass></FoundationClass>
        <WhyHook></WhyHook>
        <Cvbp></Cvbp>
        <WebinarSection></WebinarSection>
        <SocialProof></SocialProof>
        <ContactSection></ContactSection>
      </main>
      <Footer></Footer>
    </div>
  </Layout>
)

export default IndexPage
