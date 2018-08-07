import React from 'react'
import Slider from 'react-slick'

const questAns = [
{
    q: 'How do we train ?',
    a: `Our training programs are based remotely.This means you need a laptop, reliable Internet connection and some place you can comfortably learn.
    We use tools like Slack, Hangouts and Zoom for chatting, video calling and call conferencing.
    We share code using Git on Github or Bitbucket.
    
    `
},
{

  q: 'What is One on one training?',
  a: `You also have a personal code mentor. She or he will be responsible for your growth as a developer while you train here.You will have daily sessions with your mentor to make sure you're moving along fine and you take your career seriously.`
},
{

  q: `What do you gain ? What are your outcomes ?`,
  a: `Every program teaches you how to write good code while you progress toward building a working application or software solution.
  At the end of your training, you should be prepared for a career in tech like getting a software contract or getting hired.`
},
{
  
  q: `How do you learn?`,
  a: `We require you to spend at least two hours everyday intensively studying the training course ware which includes textbooks, embeded media and assitive tutorials, videos and support posts from StackOverFlow, Github Issues etc.`
},
{
  q: `How long is the course ?`,
  a: `  Lenght of courses are between 20 days and 120days. 
`
}

]



class HWTSlider extends React.Component {

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return <section style={{'minHeight': '30em', 'marginBottom': '5em'}}>
        <div className="row">
          <div className="col-md-12">
            <h2>Frequent Questions & Answers</h2>
            <Slider {...settings}>
              {
                questAns.map((qa, key) => 
                  <div key={key}>
                  <h5 style={
                    { 
                      color: '#172d66',
                      fontWeight: 'bold'
                    }
                    }>{qa.q}</h5>
                    <p>
                      {qa.a}
                    </p>
                  </div>
                )
              }

            </Slider>
          </div>
        </div>
      </section>
  }
}

export default HWTSlider