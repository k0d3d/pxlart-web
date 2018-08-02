
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
  siteTitle: 'Learn Javascript at CodeCamp 2016| Pxlart Design Training, Consulting and Development ',
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
    content: `
        <p>
          Twice a month, we host a live webinar on Hangouts / Skype / Slack.<br />
          Here you can discuss project ideas, career advice, money making ideas,
          annoying problems and learn from expert instructors and with other
          trainees.<br />
          Its a great way to fill in the blanks. Webinar sessions are usually
          within working hours and last about 3 hours.
        </p>
        <p>
          Webinar sessions are free for trainees and $5 for non-trainees.<br/> If
          this is your first time, you get a free session. <br />Register below and we
          will send you the invitation link to join.
        </p>    
    ` 
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