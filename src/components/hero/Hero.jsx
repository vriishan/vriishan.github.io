import React from 'react'
import './Hero.scss'
import { color, motion } from 'framer-motion'
import scrollDown from '/scrolldown.svg'
import Automator from './Automator/Automator'

const Hero = ({ portfolioRef, contactRef, aboutRef }) => {

    const scrollToSection = (ref, e) => {
        e.preventDefault();
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const textVariants = {
        initial: {
            x: -500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        },
        hover: {
            borderColor: "var(--accent)",
            backgroundColor: "var(--accent)",
            color: "var(--background)"
        }
    };

    const scrollVariants = {
        animate: {
            opacity: 1,
            y: [0, -15, 0],
            transition: {
                duration: 1.75,
                repeat: Infinity,
                ease: "easeInOut"
            }
        },
    }


    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>Hi there, I'm <font className="highlight">Vrushab Shandilya</font>.</motion.h2>
                    <motion.h1 variants={textVariants}>I'm a <b className="fullstackText">FullStack</b> Engineer who loves to automate!</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button variants={textVariants} whileHover="hover" className="projectButton" onClick={(e) => scrollToSection(portfolioRef, e)}>Explore Projects</motion.button>
                        <motion.button variants={textVariants} whileHover="hover" className="contactButton" onClick={(e) => scrollToSection(contactRef, e)}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img src={scrollDown} alt="" variants={scrollVariants} animate="animate" transition="transition" onClick={(e) => scrollToSection(aboutRef, e)} />
                </motion.div>
                <div className="animationContainer">
                    <Automator />
                </div>
            </div>
        </div>
    )
}

export default Hero;