import React from 'react'
import './Socials.scss'
import GithubLogo from '../icons/socials/GithubLogo'
import LinkedInLogo from '../icons/socials/LinkedInLogo'
import YoutubeLogo from '../icons/socials/YoutubeLogo'
import MailLogo from '../icons/socials/MailLogo'
import { motion } from 'framer-motion'
import TwitterLogo from '../icons/socials/TwitterLogo'

const Socials = () => {
  return (
    <div className="socials">
        <motion.div class="linkContainer" whileHover="hover">
            <a href="https://github.com/vriishan" class="link" rel="noreferrer" target="_blank">
                <GithubLogo fill={"var(--text)"}/>
            </a>
        </motion.div>
        <motion.div class="linkContainer" whileHover="hover">
            <a href="https://linkedin.com/in/vrushab-shandilya" class="link" rel="noreferrer" target="_blank">
                <LinkedInLogo fill={"var(--text)"}/>
            </a>
        </motion.div>
        <motion.div class="linkContainer" whileHover="hover">
            <a href="mailto:vrushab.shandilya@gmail.com" class="link" rel="noreferrer" target="_blank">
                <MailLogo fill={"var(--text)"}/>
            </a>
        </motion.div>
        <motion.div class="linkContainer" whileHover="hover">
            <a href="https://www.youtube.com/channel/UC9h9XqcO_kuQXgTBsjSbfSw" class="link" rel="noreferrer" target="_blank">
                <YoutubeLogo fill="var(--text)" background="var(--background)"/>
            </a>
        </motion.div>
        <motion.div class="linkContainer" whileHover="hover">
            <a href="https://twitter.com/_vshandilya" class="link" rel="noreferrer" target="_blank">
                <TwitterLogo fill={"var(--text)"}/>
            </a>
        </motion.div>
    </div>
  )
}

export default Socials;