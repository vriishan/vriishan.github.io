import React from 'react'
import './Contact.scss'
import { motion } from 'framer-motion'

const variants = {
    hidden: {
        y: 500,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1
        }
    }
}

const svgVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "#000000"
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: "white",
        transition: {
            duration: 4,
            ease: "easeInOut"
        }
    }
}

const Contact = () => {
    return (
        <motion.div className="contact" variants={variants} initial="hidden" whileInView="visible">
            <motion.div className="textContainer" variants={variants}>
                <div className="header contact">
                    <h1 className="sectionHeader white small"><font className="numberedHeading small">05.</font>What's next?</h1>
                </div>
                <motion.h1 variants={variants}>Let's connect!</motion.h1>
                <div className="item">
                    <h2>Mail</h2>
                    <span>hello@react.dev</span>
                </div>
                <div className="item">
                    <h2>Address</h2>
                    <span>1234 Watt Way, WTC, New York</span>
                </div>
                <div className="item">
                    <h2>Phone</h2>
                    <span>+1 213 677 5699</span>
                </div>
            </motion.div>
            <motion.div className="formContainer" variants={variants}>
                <motion.div className="phoneSvg" initial={{ opacity: 1 }} whileInView={{ opacity: 0 }} transition={{ delay: 3, duration: 2 }}>
                    <svg fill="#2a2a2a" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490.282 490.282" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.961128"></g><g id="SVGRepo_iconCarrier"><g><motion.path initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1}}
                        transition={{ duration: 3 }} d="M0.043,245.197c0.6,10.1,7.3,18.6,17,21.5l179.6,54.3l6.6,123.8c0.3,4.9,3.6,9.2,8.3,10.8c1.3,0.5,2.7,0.7,4,0.7 c3.5,0,6.8-1.4,9.2-4.1l63.5-70.3l90,62.3c4,2.8,8.7,4.3,13.6,4.3c11.3,0,21.1-8,23.5-19.2l74.7-380.7c0.9-4.4-0.8-9-4.2-11.8 c-3.5-2.9-8.2-3.6-12.4-1.9l-459,186.8C5.143,225.897-0.557,235.097,0.043,245.197z M226.043,414.097l-4.1-78.1l46,31.8 L226.043,414.097z M391.443,423.597l-163.8-113.4l229.7-222.2L391.443,423.597z M432.143,78.197l-227.1,219.7l-179.4-54.2 L432.143,78.197z"></motion.path></g></g></svg>
                </motion.div>
                <motion.form initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 4, duration: 1 }}>
                    <input type="text" required placeholder="Name" />
                    <input type="text" required placeholder="Email" />
                    <textarea rows={8} placeholder="Message"></textarea>
                    <button className="submitButton">Submit</button>
                </motion.form>
            </motion.div>
        </motion.div>
    )
}

export default Contact