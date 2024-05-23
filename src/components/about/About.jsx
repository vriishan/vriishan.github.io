import React from 'react'
import './About.scss'

const About = () => {
  return (
    <div className="about">
        <h1>About Me</h1>
        <div className="content">
            <div className="imageContainer">
                <img src="/hero.png" alt="" />
            </div>
            <div className="textContainer">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem deleniti quis voluptas impedit aspernatur officia aut maiores quam vero libero obcaecati earum necessitatibus nesciunt, minima eum. Vel accusamus similique voluptatibus!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo pariatur, aperiam doloribus perferendis officiis incidunt deleniti esse? Eligendi, ut! Aperiam dignissimos nulla laudantium optio cum dolore odit quibusdam ad impedit.</p>
            </div>
        </div>
    </div>
  )
}

export default About