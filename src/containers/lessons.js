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
import { FormattedNumber } from 'react-intl';
import _ from 'lodash'

const currency = [
  'USD', 'NGN'
]

const calculateCourseCost = (lesson) => {
  let userCurrency = 'USD'
  // if (_.isEmpty(localStorage.localeCurrency) ) {
  // }
  // if it early use earlydate
  // moment('2010-10-20').isBefore('2010-10-21');
  if ( moment().isBefore(moment(lesson.startDate)) ) return lesson.isEarlyPrice
  
  // if its today is after the end date.
  if (moment().isAfter(moment(lesson.startDate))) return lesson.completedPrice

  return lesson.isEarlyPrice

}

const Lessons = [
  {
    title: 'Introduction to Javascript',
    slug: 'intro2js',
    description:
      'Foundation Class in Programming using Javascript - an entry level training on how to code for beginners.',
    repo: 'https://github.com/k0d3d/stuffs',
    stack: ['HTML5', 'CSS3', 'Javascript / ES6', 'Bash / CMD', 'Toolchain'],
    isEarlyPrice: 20000,
    completedPrice: 30000,
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
    isEarlyPrice: 30000,
    completedPrice: 40000,
    buttonText: 'Early access',
  },
  {
    title: 'Promomonger.com',
    slug: 'promomonger',
    description:
      'An ecommerce site for fresh food delivery and kitchen utensils built with Wordpress and Woocommerce',
    repo: 'https://github.com/k0d3d/promomonger',
    stack: ['Wordpress', 'WooCommerce', 'PWA'],
    isEarlyPrice: 34000,
    completedPrice: 38000,
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
    isEarlyPrice: 30000,
    completedPrice: 40000,
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
    isEarlyPrice: 35000,
    completedPrice: 45000,
    buttonText: 'Early access',
  },
]

let calculatedLessons = Lessons.map(lesson => {
  let courseCost = calculateCourseCost(lesson)
  let newLesson = _.clone(lesson)
  newLesson.courseCost = <FormattedNumber
    id={_.uniqueId()}
    style='currency'
    currency='NGN'
    value={courseCost} />
  return newLesson
})

export default calculatedLessons
