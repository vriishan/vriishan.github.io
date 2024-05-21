import React from 'react'
import './Hero.scss'
import { motion } from 'framer-motion'

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

    // const sliderVariants = {
    //     initial: {
    //         x: 0,
    //         opacity: 0
    //     },
    //     animate: {
    //         x: "-1000",
    //         opacity: 1,
    //         transition: {
    //             repeat: Infinity,
    //             repeatType:"mirror",
    //             duration: 10
    //         }
    //     }
    // };

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
                    <motion.h1 variants={textVariants}>I'm a FullStack Engineer who loves to automate!</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button variants={textVariants}>See my latest works!</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img src="./scroll.png" alt="" variants={scrollVariants} animate="animate" transition="transition" />
                </motion.div>
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