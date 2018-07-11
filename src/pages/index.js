import React from 'react'

import Layout from '../components/layout'
import NavBar from '../components/navigation/nav'
import Hero from '../components/sections/hero/index'
  

const IndexPage = () => (
  <Layout>
    <div className='container'>
      <NavBar></NavBar>
      <Hero></Hero>
    </div>
  </Layout>
)

export default IndexPage
