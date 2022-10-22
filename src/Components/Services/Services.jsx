import React from 'react'
import './Services.scss';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import {motion} from 'framer-motion';
export const Services = () => {
  const transition = { duration : 1, type: 'spring'}
  return (
    <div className="Services" id='services'>
      {/* left */}
      <div className="awesome">
        <span >My Awesome</span>
        <span>services</span>
        <span>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </span>

        <button className="button s-button">Download CV</button>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>

      </div>
      {/* right */}
      <div className="cards">
        <motion.div
        whileInView={{left: '14rem'}}
        initial={{left: '25%'}}
        transition={transition}

        // style={{ left: '14rem' }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
        <motion.div 
        initial={{ left: "-11rem", top: "12rem" }}
        whileInView={{ left: "-4rem" }}
        transition={transition}

        // style={{ top: '12rem', left: '-4rem' }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, payton, java,Photoshoppp "}
          />
        </motion.div>
        <motion.div
        initial={{ top: "19rem", left: "25rem" }}
        whileInView={{ left: "12rem" }}
        transition={transition}
        // style={{ top: '19rem', left: '12rem' }}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where "}
            
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  )
}
export default Services ;