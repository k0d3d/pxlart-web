import React from 'react'
import { IntlProvider, FormattedMessage } from 'react-intl'


import Layout from '../components/layout'
import NavBar from '../components/navigation'
import Hero from '../components/sections/hero'
import WhyHook from '../components/sections/whyhook'
import Cvbp from '../components/sections/cbvp'
import WebinarSection from "../components/sections/webinars";
import FoundationClass from '../components/sections/foundation-classes'
import ContactSection from '../components/sections/contact'
import SocialProof from '../components/sections/social-proof'
import HWTSlider from '../components/sections/how-we-teach'
import Footer from '../components/footer'
  

const IndexPage = () => (
  <IntlProvider locale="en">
    <Layout>
      <div className="container">
        <NavBar />
        <main>
          <Hero />
          <FoundationClass />
          <WhyHook />
          <Cvbp />
          <WebinarSection />
          <SocialProof />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </Layout>
  </IntlProvider>
)

export default IndexPage
