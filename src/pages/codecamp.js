import React from 'react'
import { IntlProvider } from 'react-intl'


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
import ClientSection from '../components/sections/clients'
// import Footer from '../components/footer'
  

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
          <HWTSlider></HWTSlider>
          <WebinarSection />
          <SocialProof />
          <ClientSection />
          <ContactSection />
        </main>
      </div>
    </Layout>
  </IntlProvider>
)

export default IndexPage
