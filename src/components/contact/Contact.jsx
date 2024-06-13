import React from 'react'
import './Contact.scss'
import { motion } from 'framer-motion'
import RocketIcon from '../icons/others/RocketIcon'

const variants = {
    hidden: {
        x: 300,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.3
        }
    }
}

const buttonVariant = {
    hover: {
        backgroundColor: "var(--accent)",
        color: "var(--background)",
        scale: 1.02
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
        <div className="contact">
            <motion.div className="wrapper" variants={variants} initial="hidden" whileInView="visible">
                <motion.div className="textContainer" variants={variants}>
                    <div className="contactHeader">
                        <font className="numberedHeading">05.</font>What's next?
                    </div>
                    <div className="prompt">
                        <p>I am eager to apply my skillset and continue building meaningful products as a software engineer in a challenging and ever-changing tech environment. Please feel free to reach out with any opportunities through any of the platforms listed here! </p>
                    </div>
                    <div className="item">
                        <h2>Mail</h2>
                        <span>vrushab.shandilya@gmail.com</span>
                    </div>
                    <div className="item">
                        <h2>Based in</h2>
                        <span>Los Angeles, California</span>
                    </div>
                    <div className="item">
                        <RocketIcon></RocketIcon>
                    </div>
                </motion.div>
                <motion.div className="formContainer" variants={variants}>
                    <motion.form>
                        <motion.h1>Send me a message! </motion.h1>
                        <input type="text" required placeholder="Name" />
                        <input type="text" required placeholder="Email" />
                        <textarea rows={8} placeholder="Message"></textarea>
                        <motion.button className="submitButton" variants={buttonVariant} whileHover="hover">Submit</motion.button>
                    </motion.form>
                </motion.div>
            </motion.div>
        </div>    
    )
}

export default Contact

{/* <motion.div className="messageSvg" initial={{ opacity: 1 }} whileInView={{ opacity: 0 }} transition={{ delay: 1, duration: 3 }}>
                    <svg fill="var(--secondary)" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490.282 490.282" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><g><motion.path initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1}}
                        transition={{ duration: 3 }} d="M0.043,245.197c0.6,10.1,7.3,18.6,17,21.5l179.6,54.3l6.6,123.8c0.3,4.9,3.6,9.2,8.3,10.8c1.3,0.5,2.7,0.7,4,0.7 c3.5,0,6.8-1.4,9.2-4.1l63.5-70.3l90,62.3c4,2.8,8.7,4.3,13.6,4.3c11.3,0,21.1-8,23.5-19.2l74.7-380.7c0.9-4.4-0.8-9-4.2-11.8 c-3.5-2.9-8.2-3.6-12.4-1.9l-459,186.8C5.143,225.897-0.557,235.097,0.043,245.197z M226.043,414.097l-4.1-78.1l46,31.8 L226.043,414.097z M391.443,423.597l-163.8-113.4l229.7-222.2L391.443,423.597z M432.143,78.197l-227.1,219.7l-179.4-54.2 L432.143,78.197z"></motion.path></g></g></svg>
                    </motion.div> */}