import React from 'react'
import './header.css'

import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="#home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let's build something amazing using GPT-3 Playground Open AI</h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email address" />
          <button type="button" className="btn btn-primary">Get Started</button>
        </div>
        <div className="gt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
        <div>
          <img src={ai} alt="Dall-e" />
        </div>
      </div>
    </div>
  )
}

export default Header