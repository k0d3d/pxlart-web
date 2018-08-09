import React from 'react'
import { IntlProvider } from 'react-intl'


import Layout from '../components/layout'
import NavBar from '../components/navigation'
import HomeSection from '../components/homepage-sections/home'
import ContactSection from '../components/sections/contact'
import ClientSection from '../components/sections/clients'
// import Footer from '../components/footer'


const MainPage = () => (
  <IntlProvider locale="en">
    <Layout>
      <div className="container">
        <NavBar />
        <main>
          <HomeSection></HomeSection>
          <ClientSection />
          <ContactSection />
        </main>
      </div>
    </Layout>
  </IntlProvider>
)

export default MainPage
