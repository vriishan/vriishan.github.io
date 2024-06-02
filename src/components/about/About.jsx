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
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem deleniti quis voluptas impedit aspernatur officia aut maiores quam vero libero obcaecati earum necessitatibus nesciunt, minima eum. Vel accusamus similique voluptatibus!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo pariatur, aperiam doloribus perferendis officiis incidunt deleniti esse? Eligendi, ut! Aperiam dignissimos nulla laudantium optio cum dolore odit quibusdam ad impedit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo pariatur, aperiam doloribus perferendis officiis incidunt deleniti esse? Eligendi, ut! Aperiam dignissimos nulla laudantium optio cum dolore odit quibusdam ad impedit.</p>
            </div>
            <div className="linksContainer">
              Grab a copy of my resume and reach out to me on linkedin or email!
              <div className="buttonsContainer">
                <motion.button variants={hoverVariant} whileHover="hover">My Resume <OpenIcon fill="var(--text)" /></motion.button>
                <motion.button variants={hoverVariant} whileHover="hover">Linkedin <LinkedInLogo fill="var(--text)" /></motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;