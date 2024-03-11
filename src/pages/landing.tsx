import React from 'react'
import '../styles/landing.scss'
import { IoBarChart, IoCodeSlash, IoFlash, IoRibbon } from 'react-icons/io5'

export default function Landing() {
  const [isDemoOpen, setIsDemoOpen] = React.useState(false)

  return (
    <>
      <div className='landing'>
        <div className='blob'/>

        <div className='landing-wrapper'>
          <div className='landing-container'>
            <h1>NyxAI</h1>
            <p>Accelerate Your Business with AI-powered Precision</p>

            <div className='demo-wrapper' style={{ display: isDemoOpen ? 'block' : 'none' }} onClick={() => setIsDemoOpen(!isDemoOpen)}>
              <div className='demo'>
                
              </div>
            </div>

            <div className='cta' onClick={() => setIsDemoOpen(!isDemoOpen)}>
              View Demo
            </div>
          </div>
        </div>
      </div>

      <div className='features'>
        <div className='features-container'>
          <h1>Have control</h1>
          <p>Everything at your fingertips</p>
          <span>At NyxAI, we merge software development and engineering with the latest advancements in data science, machine learning, and artificial intelligence. Our interdisciplinary team brings over 20 years of cross-industry practical experience to deliver tailored, innovative solutions for you.</span>
          <div className='features-grid'>
            <div className='feature'>
              <IoCodeSlash/>
              <h2>Software Development & Engineering</h2>
              <p>Robust, scalable, and future-proof software solutions.</p>
            </div>
            <div className='feature'>
              <IoBarChart/>
              <h2>Data Science & AI</h2>
              <p>From data analysis to advanced machine learning and AI algorithms.</p>
            </div>
            <div className='feature'>
              <IoFlash/>
              <h2>Cross-Industry Know-How</h2>
              <p>Our deep understanding of various industries allows us to precisely identify and address the challenges and opportunities of your business.</p>
            </div>

            <div className='feature'>
              <IoRibbon/>
              <h2>Rock-Solid Results</h2>
              <p>We stand for quality, efficiency, and innovation. Our solutions are designed to deliver measurable results and maximize your success.</p>
            </div>
          </div>
        </div>  
      </div>


      <div className='next-step'>
        <div className='next-step-container'>
          <h1>Ready for the next step?</h1>
          <p>Let's talk about your project</p>
          <div className='cta'>
            Contact us
          </div>
        </div>
      </div>

    </>
  )
}
