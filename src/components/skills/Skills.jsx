import React, { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import './Skills.scss';
import Card from './card/Card';
import { useSpring } from 'framer-motion';
import skills from './data';


const Skills = () => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const smoothProgress = useSpring(scrollYProgress, { mass: 0.25, stiffness: 50 })
  const x = useTransform(smoothProgress, [0, 1], ["10%", "-65%"]);

  const isInView = useInView(ref, {
    margin: "-100px"
  });

  const variants = {
    initial: { x: 0, opacity: 0 },
    animate: {
      x: 0, opacity: 1, y: 0, transition: {
        duration: 1,
        staggerChildren: 0.5
      }
    }
  }

  return (
    <motion.div className="skills" ref={ref} animate="animate">
      <motion.div className="listContainer">
        <div className="header sticky">
          <h1 className="sectionHeader"><font className="numberedHeading">02.</font>My Skillset</h1>
        </div>
        <div className="blender">
          <div className="wrapper">
            <motion.div className="cards" style={{ x }}>
              {skills.map(skill => {
                return <Card key={skill.id} {...skill} />
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Skills;