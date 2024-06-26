import React, { useRef } from 'react'
import "./Parallax.scss"
import { motion, useScroll, useTransform } from 'framer-motion'

const Parallax = ({ type }) => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const yBg = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);

    return (
        <div 
            className="parallax" 
            ref={ref}
            style={{background: type === "services" ? "linear-gradient(180deg, #2a2a2a, #222831)" : "linear-gradient(180deg, #2a2a2a, #222831)"}}
        >
            <motion.h1 style={{y: yText}}>{type === "services" ? "What I can use" : "What I've done"}</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div className="planets" style={{y: yBg, backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"})`}}></motion.div>
            <motion.div className="stars" style={{x: yBg}}></motion.div>
        </div>
    )
}

export default Parallax;