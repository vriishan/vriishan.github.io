import React from 'react'
import './Socials.scss'
import GithubLogo from '../icons/socials/GithubLogo'
import LinkedInLogo from '../icons/socials/LinkedInLogo'
import InstagramLogo from '../icons/socials/InstagramLogo'
import YoutubeLogo from '../icons/socials/YoutubeLogo'
import MailLogo from '../icons/socials/MailLogo'

const Socials = () => {
  return (
    <div className="socials">
        <div class="linkContainer">
            <a href="https://github.com/vriishan" class="link" rel="noreferrer" target="_blank">
                <GithubLogo fill={"var(--text)"}/>
            </a>
        </div>
        <div class="linkContainer">
            <a href="https://linkedin.com/in/vrushab-shandilya" class="link" rel="noreferrer" target="_blank">
                <LinkedInLogo fill={"var(--text)"}/>
            </a>
        </div>
        <div class="linkContainer">
            <a href="mailto:vrushab.shandilya@gmail.com" class="link" rel="noreferrer" target="_blank">
                <MailLogo fill={"var(--text)"}/>
            </a>
        </div>
        <div class="linkContainer">
            <a href="https://www.youtube.com/channel/UC9h9XqcO_kuQXgTBsjSbfSw" class="link" rel="noreferrer" target="_blank">
                <YoutubeLogo fill="var(--text)" background="var(--background)"/>
            </a>
        </div>
        <div class="linkContainer">
            <a href="https://instagram.com/vriishan" class="link" rel="noreferrer" target="_blank">
                <InstagramLogo fill={"var(--text)"}/>
            </a>
        </div>
    </div>
  )
}

export default Socials;