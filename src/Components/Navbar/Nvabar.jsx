import React from 'react'
import Toggle from '../Toggle/Toggle';
import './Navbar.scss';
import { Link } from 'react-scroll';



const Nvabar = () => {
  return (
    <div className="n-wrapper" id='Navbar'>
        <div className="n-left">
            <div className="n-name">
                Andrew
            </div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{ listStyleType: 'none' }}>
                    <Link spy={true} to='Nvabar' smooth={true} activeClass='activeClass'>
                    <li>Home</li>
                    </Link>
                    <Link spy={true} to= 'services' smooth={true} activeClass='activeClass'>
                    <li>Services</li>
                    </Link>
                    <Link spy={true} to= 'experience' smooth={true} activeClass='activeClass'>
                    <li>Experience</li>
                    </Link>
                    <Link spy={true} to= 'portfolio' smooth={true} activeClass='activeClass'>
                    <li>Portfolio</li>
                        </Link>
                        <Link spy={true} to= 'testimonial' smooth={true} activeClass='activeClass'>
                        <li>Testimonials</li>
                        </Link>
                    
                    
                    
                    
                </ul>
            </div>
            <button className='button n-button'>
            contect
        </button>
        </div>
        
    </div>
  )
}

export default Nvabar