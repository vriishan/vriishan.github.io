import React, { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import './Skills.scss';
import Card from './card/Card';


const skills = [
  {
    id: 1,
    title: "Frontend",
    image: ["/react.png", "/react.png", "/react.png"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, deleniti! Maiores quis incidunt eveniet reiciendis sequi sapiente voluptates facere in! Modi nihil asperiores mollitia fugit sed corporis veniam hic ullam."
  },
  {
    id: 2,
    title: "Frontend",
    image: ["/react.png"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, deleniti! Maiores quis incidunt eveniet reiciendis sequi sapiente voluptates facere in! Modi nihil asperiores mollitia fugit sed corporis veniam hic ullam."
  },
  {
    id: 3,
    title: "DevOps1",
    image: ["/react.png"],
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur veniam accusamus sint inventore at doloremque quae blanditiis totam excepturi dolorem atque maiores distinctio expedita itaque odit eaque consequuntur, nulla dicta."
  },
  {
    id: 4,
    title: "DevOps2",
    image: ["/react.png"],
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur veniam accusamus sint inventore at doloremque quae blanditiis totam excepturi dolorem atque maiores distinctio expedita itaque odit eaque consequuntur, nulla dicta."
  },
  {
    id: 5,
    title: "DevOps3",
    image: ["/react.png"],
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur veniam accusamus sint inventore at doloremque quae blanditiis totam excepturi dolorem atque maiores distinctio expedita itaque odit eaque consequuntur, nulla dicta."
  }
];

const Skills = () => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["30%", "-75%"]);

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
        <motion.div className="cardsContainer" style={{x}}>
          {skills.map(skill => {
            return <Card key={skill.id} {...skill} />
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Skills;