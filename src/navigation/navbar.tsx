import React from 'react'
import './navbar.scss'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { IoChevronForwardOutline } from "react-icons/io5";

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640)
        }

        // Call the function immediately to set the state based on the initial window size
        handleResize()

        window.addEventListener('resize', handleResize)

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className={`navbar ${isMobile ? 'mobile' : 'desktop'}`}>
            <div className='nav-container'>
                <div className={`logo ${isMobile ? 'mobile' : 'dekstop'}`}>
                    <h1>NyxAI</h1>
                </div>

                <div className={`links ${isMobile ? 'mobile' : 'desktop'}`}>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/software'>Software</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>
                        <NavLink to='/help'>Help</NavLink>
                        <NavLink to='/contact'>Get Started <IoChevronForwardOutline/></NavLink>
                </div>

                <div className={'menu'}>
                    {isMobile ? 
                        <div>
                            <div className='line'></div>
                            <div className='line'></div>
                            <div className='line'></div>
                        </div>

                     :  <></>}
                </div>
            </div>
        </div>
    )
}
