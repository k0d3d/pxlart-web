
import React from 'react'
import sanitizeHtml from 'sanitize-html'

const returnCleanHtml = (str) => {
  let cleaned = sanitizeHtml(str)
  console.log(str)
  return <span dangerouslySetInnerHTML={{ __html:cleaned}} />
}

const questions = [
  'Do you like to build things?',
  'Are you looking for a way to build a tech solution but you dont have any idea about where to start ?'
]

const lang = {
  siteTitle: 'Pxlart Design Training',
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
  foundationClass: {
    teaserText: returnCleanHtml('Enrollment is open for <br />August'),
    title: returnCleanHtml('Foundation Class in Programming <br />using Javascript'),
    subTitle: 'Introduction to Javascript',
    theHook: [
      {
        title: 'What does this training offer',
        text: returnCleanHtml(`This course is designed for entry level programmers. Our
                  curriculum is 100% remote. This means you can take
                  lessons and video trainings from your comfort. <br />
                  <br />`)
      },
    ],
  },
}


export default lang