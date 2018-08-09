
import React from 'react'
import sanitizeHtml from 'sanitize-html'

const returnCleanHtml = (str) => {
  let cleaned = sanitizeHtml(str)
  return <span dangerouslySetInnerHTML={{ __html:cleaned}} />
}

// const questions = [
//   'Do you like to build things?',
//   'Are you looking for a way to build a tech solution but you dont have any idea about where to start ?'
// ]

export const lang = {
  siteTitle: 'Learn Javascript at CodeCamp 2018 | Pxlart Design Training, Consulting and Development ',
  metaDescription:
    'Learn to build high performance javascript applications.Our training includes courses and projects for front end development and Wordpress',
  metaKeywords:
    "'pxlart designs', 'it consultancy nigeria', 'web developer solutions nigeria', 'coding training lagos'",
  heroSection: {
    title: 'Learn to code',
    subTitle: 'high performance web applications.',
    theHook:
      'We have prepared lots of videos, detailed interactive tutorials and fully documented project files for you to learn coding.',
    ctaButtonText: 'Enroll Today',
  },
  webinars: {
    content: returnCleanHtml(`
        <p>
          Twice a month, we host a live coding webinar on Hangouts / Zoom / Slack.<br />
          Here you can discuss project ideas, career advice, money making ideas,
          annoying problems and learn from expert instructors and with other
          trainees.<br />
          Its a great way to fill in the blanks. 
        </p>
        <p>
          Live coding webinar sessions cost $10 per month to sign up.<br />
          Sessions happen on 12am Wednesday and 4pm Friday.
        </p>    
    ` )
  },
  clientSection: {
    title: returnCleanHtml('Clients we worked  <br />for')
  },
  homeSection: {
    title: returnCleanHtml(`
      <span>We are </span>coming soon...
    `),
    content: returnCleanHtml(`
    <p className="subtitle">
            If you're thinking, where has all the fun stuff gone to ? <br />
            Do not panic. Remain calm. <br />
            We are putting in new sweet stuff into our website and
            getting ready to serve you with an all new candy experience.
            While you patiently wait for us, feel free to get to know what we have been up to below.
                  </p>
    `)
  },
  foundationClass: {
    teaserText: returnCleanHtml('Enrollment is open for <br />August'),
    title: returnCleanHtml('Foundation Class in Programming <br />using Javascript'),
    subTitle: 'Introduction to Javascript',
    enrollBtn: 'Enroll Now for N30,000 per month',
    theHook: [
      {
        title: 'What we offer here.',
        content: `This course is designed for entry level programmers. Our
                  curriculum is 100% remote.This means you can take lessons and
                  video trainings anywhere you're comfortable. <br />`
      },
      {
        title: 'From novice to pro',
        content: `
        Training Projects covers learning basic programming concepts
                  all the way to interesting objectives like creating games and
                  even building data driven applications.    
        `
      },
      {
        title: 'Our guarantees',
        content: `We can guarantee after completing our training programs, you
                  can start your own freelance web design gigs or a blog or a
                  personal project you have been dreaming about. You are also equipped
                  to get a job at local and international software companies.  `
      }
         
    ].map(str => {
      return {
        title: returnCleanHtml(str.title),
        content: returnCleanHtml(str.content)
      }
    }),
  },
}