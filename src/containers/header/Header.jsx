import './HeaderStyles.css'
import people from '../../assets/images/people.png'
import ai from '../../assets/images/ai.png'
import React from 'react'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's build something amazing with GPT-3 OpenAI
        </h1>
        <p>ChatGPT3: the ultimate solution for seamless customer engagement. Our cutting-edge technology understands natural language and responds in real-time, providing personalized attention instantly. Say goodbye to long wait times and hello to instant gratification. Try ChatGPT3 today and experience the future of customer engagement!</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

        <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
      </div>
    </div>
  )
}

export default Header