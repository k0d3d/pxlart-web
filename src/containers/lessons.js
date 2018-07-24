/**
 * Every lesson has a 
 * title, 
 * description, 
 * startdate, // if not already started, is early, if already completedPrice, if ongoing
 * endddate,
 * isEarlyPrice,
 * onGoingPrice,
 * completedPrice,
 * paymentPageUrl,
 * stack
 * 
 * 
 */

import React from 'react'
import moment from 'moment'
import { FormattedMessage, FormattedNumber } from 'react-intl';
import _ from 'lodash'

const currency = [
  'USD', 'NGN'
]

const calculateCourseCost = (lesson) => {
  let userCurrency
  if (_.isEmpty(localStorage.localeCurrency) ) {
    userCurrency = 'USD'
  }
  // if it early use earlydate
  if ( moment(lesson.startDate) < moment() ) return lesson.isEarlyPrice
  
  // if its today is after the end date.
  if (moment() > moment(lesson.endDate)) return lesson.completedPrice

}

const Lessons = [
  {
    title: 'Introduction to Javascript',
    slug: 'intro2js',
    description:
      'Foundation Class in Programming using Javascript - an entry level training on how to code for beginners.',
    repo: 'https://github.com/k0d3d/stuffs',
    stack: ['HTML5', 'CSS3', 'Javascript / ES6', 'Bash / CMD', 'Toolchain'],
    courseCost: 35000,
    isEarlyPrice: 35000,
    onGoingPrice: 45000,
    completedPrice: 50000,
    startDate: 'August 1 2018',
    endDate: 'August 31 2018',
    paymentPageUrl: 'https://paystack.com/pay/intro2js',
    buttonText: 'Enroll now',
  },
  {
    title: 'Stuffs',
    slug: 'stuffs',
    description:
      'Extensive Inventory Management App built to manage inventory for Pharmacies.',
    repo: 'https://github.com/k0d3d/stuffs',
    stack: [
      'AngularJS',
      'Redis',
      'MongoDB',
      'NodeJs',
      'Electron Js',
      'Express Js',
      'Passport Js',
    ],
    courseCost: 25000,
    buttonText: 'Early access',
  },
  {
    title: 'Promomonger.com',
    slug: 'promomonger',
    description:
      'An ecommerce site for fresh food delivery and kitchen utensils built with Wordpress and Woocommerce',
    repo: 'https://github.com/k0d3d/promomonger',
    stack: ['Wordpress', 'WooCommerce', 'PWA'],
    courseCost: 20000,
    buttonText: 'Early access',
  },
  {
    title: 'IWAC',
    slug: 'iwac',
    description:
      'iXit Web Application Client allows users download user uploaded music, videos and other files.',
    repo: 'https://github.com/k0d3d/iwac',
    stack: [
      'AngularJS',
      'Redis',
      'MongoDB',
      'NodeJs',
      'Express Js',
      'Passport Js',
    ],
    courseCost: 12000,
    buttonText: 'Early access',
  },
  {
    title: 'iXit Bot',
    slug: 'ixit-bot',
    description:
      "iXit web scraper codename IASS , Built in Python's Scrapy and also in NodeJs using multiple scraping engines including PhantomJs ",
    repo: 'https://github.com/k0d3d/ixitbot',
    stack: [
      'Redis',
      'MongoDB',
      'NodeJs',
      'Express Js',
      'Python',
      'Scrapy',
      'Phanton Js',
    ],
    courseCost: 15000,
    buttonText: 'Early access',
  },
]

export default Lessons.map( lesson => {
  let courseCost = 5000 || calculateCourseCost(lesson)
  lesson.courseCost = <FormattedNumber 
  id={_.uniqueId() }
  style='currency'
  currency='NGN'
  value={courseCost} />
  return lesson
})
