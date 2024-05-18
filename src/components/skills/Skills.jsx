import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import './Skills.scss';

const Skills = () => {

  const ref = useRef();

  const isInView = useInView(ref, {
    margin: "-100px"
  });

  const variants = {
    initial: { x: -500, opacity: 0},
    animate: { x: 0, opacity: 1, y: 0, transition: {
      duration: 1,
      staggerChildren: 0.5
    }}
  }

  return (
    <motion.div className="skills" variants={variants} initial="initial" ref={ref} animate="animate">
      <motion.div className="textContainer" variants={variants}>
        <p>I focus on building scalable, efficient and elegant applications, through and through</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
          <div className="title">
            <img src="./people.webp" alt="" />
            <h1>
              <motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas
            </h1>
          </div>
          <div className="title">
            <h1>
              <motion.b whileHover={{color: "orange"}}>For Your</motion.b> Business.
            </h1>
            <button>What I can do?</button>
          </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <div className="box" whileHover={{background: "lightgray", color: "black"}}>
          <h2>Frontend</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quia reprehenderit autem obcaecati ipsam. Eligendi unde tenetur sapiente aut. Quasi nisi explicabo totam quod quia labore commodi iure voluptas ratione.</p>
          <button>Go</button>
        </div>
        <div className="box" whileHover={{background: "lightgray", color: "black"}}>
          <h2>Backend</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quia reprehenderit autem obcaecati ipsam. Eligendi unde tenetur sapiente aut. Quasi nisi explicabo totam quod quia labore commodi iure voluptas ratione.</p>
          <button>Go</button>
        </div>
        <div className="box" whileHover={{background: "lightgray", color: "black"}}>
          <h2>DevOps</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quia reprehenderit autem obcaecati ipsam. Eligendi unde tenetur sapiente aut. Quasi nisi explicabo totam quod quia labore commodi iure voluptas ratione.</p>
          <button>Go</button>
        </div>
        <div className="box" whileHover={{background: "lightgray", color: "black"}}>
          <h2>Automation</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quia reprehenderit autem obcaecati ipsam. Eligendi unde tenetur sapiente aut. Quasi nisi explicabo totam quod quia labore commodi iure voluptas ratione.</p>
          <button>Go</button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Skills;