import React from 'react'
import './About.scss'
import LinkedInLogo from '../icons/socials/LinkedInLogo';
import OpenIcon from '../icons/others/OpenIcon';
import { RESUME_LINK } from '../../var';

import { color, motion } from 'framer-motion';


const About = () => {

  const hoverVariant = {
    initial: {
      backgroundColor: "var(--primary)"
    },
    hover: {
      backgroundColor: "var(--accent)",
      color: "var(--background)",
      fill: "var(--background)",
      scale: 1.05
    }
  }

  return (
    <div className="about">
      <div className="mainContainer">
        <div className="header">
          <h1 className="sectionHeader" style={{"line-height": 0}}><font className="numberedHeading">01.</font> About Me</h1>
        </div>
        <div className="content">
          <div className="wrapper">
            <div className="imageContainer">
              <img src="/me.jpg" alt="" />
            </div>
            <div className="textContainer">
              <div className="description">
                <p>Hi there, my name is Vrushab. I'm a software engineer specializing in full-stack software engineering and automation solutions. I enjoy building products that solve everyday problems and strive to focus on the real things and let the machine do the hard work!</p>
                <p>I've had the privilege of interning and working at a large healthcare company building platform solutions covering the interface, application development, backend design and deployment, all while keeping with the best software quality standards. </p>
                <p>When I'm away from my keyboard, you can find me jamming at my piano, hiking away in the Los Angeles hills or catching the latest sci-fi action movie!</p>
                <p>
                Grab a copy of my resume and reach out to me on Linkedin or Email!
                </p>
              </div>
            </div>
          </div>
          <div className="linksContainer">
            <div className="buttonsContainer">
              <a href={RESUME_LINK} target="_blank"><motion.button variants={hoverVariant} initial="initial" whileHover="hover">My Resume <OpenIcon fill="var(--text)" hover="var(--background)"/></motion.button></a>
              <a href="https://linkedin.com/in/vrushab-shandilya" target="_blank"><motion.button variants={hoverVariant} whileHover="hover" initial="initial" >Linkedin <LinkedInLogo fill="var(--text)" hover="var(--background)"/></motion.button>
              </a>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default About;