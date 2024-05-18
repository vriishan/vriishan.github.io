import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const projects = [
    {
        id: 1,
        title: "React 1",
        img: "./people.webp",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, molestiae. Vitae soluta, excepturi eaque magnam temporibus odio eius modi maxime esse ab aliquid sunt numquam culpa repudiandae qui, cum sed."
    },
    {
        id: 2,
        title: "React 2",
        img: "./people.webp",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, molestiae. Vitae soluta, excepturi eaque magnam temporibus odio eius modi maxime esse ab aliquid sunt numquam culpa repudiandae qui, cum sed."
    },
    {
        id: 3,
        title: "React 3",
        img: "./people.webp",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, molestiae. Vitae soluta, excepturi eaque magnam temporibus odio eius modi maxime esse ab aliquid sunt numquam culpa repudiandae qui, cum sed."
    },
    {
        id: 4,
        title: "React 4",
        img: "./people.webp",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, molestiae. Vitae soluta, excepturi eaque magnam temporibus odio eius modi maxime esse ab aliquid sunt numquam culpa repudiandae qui, cum sed."
    },
    {
        id: 5,
        title: "React 5",
        img: "./people.webp",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, molestiae. Vitae soluta, excepturi eaque magnam temporibus odio eius modi maxime esse ab aliquid sunt numquam culpa repudiandae qui, cum sed."
    }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {projects.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;