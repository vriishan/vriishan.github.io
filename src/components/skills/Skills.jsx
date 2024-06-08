import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import './Skills.scss';
import Card from './card/Card';
import { useSpring } from 'framer-motion';
import skills from './data';
import { useMediaQuery } from 'react-responsive';


const Skills = () => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const isMobile = useMediaQuery({ query: '(max-width: 738px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 738px) and (max-width: 1366px)' });

  const smoothProgress = useSpring(scrollYProgress, { mass: 0.25, stiffness: 50 })
  const x = useTransform(
    smoothProgress, 
    [0, 1], 
    isMobile ? ["5%", "-85%"] : isTablet ? ["5%", "-85%"] : ["10%", "-55%"]
  );

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