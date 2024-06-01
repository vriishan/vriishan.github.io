import React from 'react'
import './Hero.scss'
import { motion } from 'framer-motion'
import scrollDown from '/scrolldown.svg'
import Automator from './Automator/Automator'

const Hero = () => {

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
                        <motion.button variants={textVariants} className="projectButton">Explore Projects</motion.button>
                        <motion.button variants={textVariants} className="contactButton">Contact Me</motion.button>
                    </motion.div>
                    <motion.img src={scrollDown} alt="" variants={scrollVariants} animate="animate" transition="transition" />
                </motion.div>
                <div className="animationContainer">
                    <Automator />
                </div>
            </div>
        </div>
    )
}

export default Hero;