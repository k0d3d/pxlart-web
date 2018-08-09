import React from 'react'
import kebabCase from 'lodash/kebabCase'
import { lang } from '../../../lib/lang.en'
import styled from 'styled-components'

import './index.css'

// const gradients = [
//   { 
//     backgroundColor: '#52ACFF',
//     backgroundImage: 'linear-gradient(180deg, #52ACFF 25%, #FFE32C 100%)'
//   },
//   {
//     backgroundColor: '#FAACA8',
//     backgroundImage: 'linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)'
//   },
//   {
//     backgroundColor: '#FEE140',
//     backgroundImage: 'linear-gradient(90deg, #FEE140 0%, #FA709A 100%)'

//   }
// ]

const clientSectionLanguage = lang.clientSection
const ScrollList = styled.div`
  margin: 3.414em 0 0.5em;
  
`
const StyledItem = styled.span`
  
  &:hover {
    color: grey;
  }
`

const listOfClients = [
  {
    name: 'EigenValue Ltd',
    story: '',
  },
  {
    name: 'ItsYourInternet',
    story: '',
  },
  {
    name: 'Integra IT',
    story: '',
  },
  {
    name: 'DrugStoc.com',
    story: '',
  },
  {
    name: 'Audax Solutions',
    story: '',
  },
  {
    name: 'Ourprayerbox.com',
    story: '',
  },
  {
    name: 'Avanage Group Limited',
    story: '',
  },
  {
    name: 'BarbeachTV.com',
    story: '',
  },
  {
    name: 'CineCore Innovations',
    story: '',
  },
  {
    name: 'Connect Nigeria',
    story: '',
  },
  {
    name: 'Multi Vantage Media',
    story: '',
  },
  {
    name: 'Obiwezy.com',
    story: '',
  },
  {
    name: 'HipHopWorldAwards 2010',
    story: '',
  },
  {
    name: 'Diamond Pictures Limited',
    story: '',
  },
  {
    name: 'Nollywood Cinemas Limited',
    story: '',
  },
  {
    name: 'Global West Vessel Services Limited',
    story: '',
  },
  {
    name: 'Compton Green Express',
    story: '',
  },
  {
    name: 'First Class Verifications',
    story: '',
  },
  {
    name: 'Jan7 Clothing',
    story: '',
  },
  {
    name: 'Views and Tunes',
    story: '',
  },
  {
    name: 'Chorppyz Records',
    story: '',
  },
  {
    name: 'Emplug Limited',
    story: '',
  },
  {
    name: 'BWE',
    story: '',
  },
  {
    name: 'El Castillo Homes',
    story: '',
  },
  {
    name: 'Frost Water',
    story: ''
  },
  {
    name: 'Zahari Properties',
    story: ''
  },
  {
    name: 'VMWBO News',
    story: ''
  }
]

const ClientSection = () => (
  <section id="client-section">
    <div className="row">
      <div className="col-md-12">
        <h2 className="text-center">{ clientSectionLanguage.title }</h2>
      </div>
      <div className="col-md-12 col-scroll">
        <ScrollList id="titles">
          <div className="scroll-list titlecontent">
            {
              listOfClients.map((cl, key) => (
                  <p key={kebabCase(key) + key.toString()}>

                  <StyledItem className="text-center" > {cl.name} </StyledItem>
                  </p>
                ) 
              )
            }
          </div>
        </ScrollList>
      </div>
    </div>
  </section>
)

export default ClientSection