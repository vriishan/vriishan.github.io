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

    const binaryCodeVariant = {
        visible: {
            x: 400,
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 3, // Adjust duration as needed
                    ease: "linear"
                }
            }
        }
    }

    const screenVariant = {
        hidden: {
            x: -200,
            y: -50,
            opacity: 0,
        },
        visible1: {
            x: [-200, 200, 200],
            y: [0, 0, -200], 
            scale: [0, 1.5, 1.5],
            opacity: [0, 1, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
            }
        },
        visible2: {
            x: [-200, 200, 200],
            y: [0, 0, -200], 
            scale: [0, 1.5, 1.5],
            opacity: [0, 1, 0],
            transition: {
                delay: 2,
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
            }
        },
        visible3: {
            x: [-200, 200, 200],
            y: [0, 0, -200], 
            scale: [0, 1.5, 1.5],
            opacity: [0, 1, 0],
            transition: {
                delay: 4,
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
            }
        }
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
                    <motion.h2 variants={textVariants}>VRUSHAB SHANDILYA</motion.h2>
                    <motion.h1 variants={textVariants}>I'm a <b className="bold">FullStack Engineer</b> who loves to <b className="bold yellow">automate</b>!</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button variants={textVariants} className="projectButton">Explore Projects</motion.button>
                        <motion.button variants={textVariants} className="contactButton">Contact Me</motion.button>
                    </motion.div>
                    <motion.img src={scrollDown} alt="" variants={scrollVariants} animate="animate" transition="transition" />
                </motion.div>
                <div className="animationContainer">
                    <Automator />
                    {/* <motion.span variants={binaryCodeVariant} animate="visible">11011100001110000011110000</motion.span>
                    <div className="box">
                        box
                    </div>
                    <motion.div className="screens">
                        <motion.div className="screen1" variants={screenVariant} initial="hidden" animate="visible1">screen1</motion.div>
                        <motion.div className="screen2" variants={screenVariant} initial="hidden" animate="visible2">screen2</motion.div>
                        <motion.div className="screen3" variants={screenVariant} initial="hidden" animate="visible3">screen3</motion.div>
                    </motion.div> */}
                </div>
                {/* <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Backend Frontend DevOps Automation Documentation
            </motion.div> */}
                {/* <div className="imageContainer">
                <img src="./hero.png" alt="" />
            </div> */}
            </div>
        </div>
    )
}

export default Hero;