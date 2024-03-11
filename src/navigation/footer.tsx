import React from 'react'
import './footer.scss'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <p>Ihr Partner für eine intelligente Zukunft</p>
            <h1>{`NyxAI @ ${new Date().getFullYear()}`}</h1>
        </div>
    </div>
  )
}
