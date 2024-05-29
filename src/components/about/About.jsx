import React from 'react'
import './About.scss'

const About = () => {
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

                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default About;