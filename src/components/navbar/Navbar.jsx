import "./Navbar.scss"
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
// import Sidebar from "../sidebar/Sidebar";
import { useState, useEffect } from "react";

const Navbar = () => {

    const hoverVariant = {
        "hover": {
            scale: 1.2,
            transition: { duration: 0.2 },
        }
      }

    // const ref = useRef();
    const [hidden, setHidden] = useState(true);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
      const previous = scrollY.getPrevious();
      if (latest > previous && latest > 150) {
        setHidden(false);
      } else {
        setHidden(true);
      }
    })

    return (
        <motion.div 
            className="navbar"
            variants = {{
                visible: { 
                    backgroundColor: "#b1b7b4"
                },
                hidden: {
                    backgroundColor: "#00000000"
                }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.5, ease: "easeInOut"}}
        >
            <div className="wrapper">
                <div className="navbarLeft">
                    <motion.span
                        className="motion-span"
                        initial={{opacity: 0, scale: 0.5}} 
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 1}}
                    >
                        &lt;Vrushab/&gt;
                    </motion.span>
                </div>
                <div className="navbarMiddle">
                    <div className="links">
                        <motion.a href="#" variants={hoverVariant} whileHover="hover">Home</motion.a>
                        <motion.a href="#" variants={hoverVariant} whileHover="hover">About</motion.a>
                        <motion.a href="#" variants={hoverVariant} whileHover="hover">Skills</motion.a>
                        <motion.a href="#" variants={hoverVariant} whileHover="hover">Experience</motion.a>
                        <motion.a href="#" variants={hoverVariant} whileHover="hover">Projects</motion.a>
                    </div>
                </div>
                <div className="navbarRight">

                </div>
                
                
                {/* <div className="social">
                    <a href="#"><img src="./linkedin.png" alt="" /></a>
                    <a href="#"><img src="./instagram.png" alt="" /></a>
                    <a href="#"><img src="./youtube.png" alt="" /></a>
                    <a href="#"><img src="./email.png" alt="" /></a>
                </div> */}
            </div>
        </motion.div>
    )
}

export default Navbar;