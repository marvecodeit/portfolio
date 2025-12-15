import React from 'react'
import './Home.css'
import port from '../../public/assets/portfolio.jpg'
const Home = () => {
  return (
    <div>
        <div className="img-container"> 
            <img src={port} alt="" />
        </div>
        <div className="text-container">
        <h3>I'm Onyema Marvellous</h3>
        <p>Christian | Web Developer | Native Developer </p>
        
        </div>
        <div className="div-cont">
          <div className="div1">
            <h1>Web Development</h1>
            <p>Works at Christ Witness Mission.<br />Web Developer  Deeper Christian Life Ministry</p>
          </div>
          <div className="div1">
            <h1>Native (IOS & ANDRIOD) Dev</h1>
            <p>I build cross-platform mobile applications using React Native, delivering smooth, high-performance experiences on both iOS and Android devices.</p>
          </div>
          <div className="div1">
            <h1>Skills</h1>
            <p>I am skilled in React.js, React Native, HTML, and CSS, with a strong focus on building clean, responsive, and user-friendly interfaces for both web and mobile applications.</p>
          </div>
          <div className="div1">
            <h1>UX & UI</h1>
            <p>I create modern, clean, and user-friendly interfaces for both web and mobile apps. I focus on smooth layouts, clear navigation, and a visually appealing design that improves user experience and makes every project look professional.</p>
          </div>
          
        </div>
        <div className="hire-me">
          <h1>Let’s Work Together</h1>
          <p>I’m available for freelance projects, collaborations, and full-time roles.</p>
          <p>I build clean, modern, and responsive websites and mobile apps using React.js and React Native.</p>
          <a href="https://wa.me/2348075351824" target="_blank" rel="noopener noreferrer">
          <div> 
  <button>Chat with us on WhatsApp</button>
</div>
</a>

        </div>
    </div>
  )
}

export default Home