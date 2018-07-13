import React from 'react'

import Layout from '../components/layout'
import NavBar from '../components/navigation/nav'
import Hero from '../components/sections/hero'
import WhyHook from '../components/sections/whyhook'
import Cvbp from '../components/sections/cbvp'
  

const IndexPage = () => (
  <Layout>
    <div className='container'>
      <NavBar></NavBar>
      <Hero></Hero>
      <WhyHook></WhyHook>
      <Cvbp></Cvbp>
    </div>
  </Layout>
)

export default IndexPage
