import React from 'react'
import './About.scss'
import LinkedInLogo from '../icons/socials/LinkedInLogo';
import MailLogo from '../icons/socials/MailLogo';
import OpenIcon from '../icons/others/OpenIcon';

import { motion } from 'framer-motion';


const About = () => {

  const hoverVariant = {
    hover: {
      backgroundColor: "var(--primary)",
      scale: 1.05
    }
  }
  return (
    <div className="about">
      <div className="mainContainer">
        <div className="header">
          <h1 className="sectionHeader"><font className="numberedHeading">01.</font> About Me</h1>
        </div>
        <div className="content">
          <div className="imageContainer">
            <img src="/me.jpg" alt="" />
          </div>
          <div className="textContainer">
            <div className="description">
              <p>Hi there, my name is Vrushab. I'm a software engineer specializing in full-stack software engineering and automation solutions. I enjoy building products that solve everyday problems and strive to focus on the real things and let the machine do the hard work!</p>
              <p>I've had the privilege of interning and working at a large healthcare company building platform solutions covering the interface, application development, backend design and deployment, all while keeping with best software quality standards. </p>
              <p>I'm also fortunate enough to be continuing my education at the University of Southern California, pursuing my Master's in Computer Science. After a great learning of databases, security and operating systems, I am primed with a deep understanding of the underlying architecture and cutting-edge technologies that interact with data.</p>
              <p>When I'm away from my keyboard, you can find me jamming at my piano, hiking away in the Los Angeles hills or catching the latest sci-fi action movie!</p>
              <p>
              Grab a copy of my resume and reach out to me on Linkedin or Email!
              </p>
            </div>
            <div className="linksContainer">
              <div className="buttonsContainer">
                <a href="https://drive.google.com/file/d/1hwh_k0ckXGqQIZdEfk2Ufg1u_NQ3RFnG/view?usp=sharing" target="_blank"><motion.button variants={hoverVariant} whileHover="hover">My Resume <OpenIcon fill="var(--text)" /></motion.button></a>
                <a href="https://linkedin.com/in/vrushab-shandilya" target="_blank"><motion.button variants={hoverVariant} whileHover="hover">Linkedin <LinkedInLogo fill="var(--text)" /></motion.button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;