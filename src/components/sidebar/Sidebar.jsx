import './Sidebar.scss'
import ToggleButton from './toggleButton/toggleButton';
import Links from './links/Links';
import { useState } from 'react';
import { motion } from 'framer-motion';
const Sidebar = ({ portfolioRef, heroRef, aboutRef, skillsRef, experienceRef, contactRef }) => {

    const [open, setOpen] = useState(false);

    const variants = {
        open: {
            clipPath: "circle(1200px at 3.75rem 3.75rem)",
            transition: {
                type: "spring",
                stiffness: 20
            }
        },
        closed: {
            clipPath: "circle(2.1rem at 3.75rem 3.75rem)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    }
    return (
        <motion.div className="sidebar" animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants}>
                <Links 
                    portfolioRef={portfolioRef}
                    heroRef={heroRef} 
                    aboutRef={aboutRef}
                    experienceRef={experienceRef}
                    skillsRef={skillsRef}
                    contactRef={contactRef}
                />
            </motion.div>
            <ToggleButton setOpen={setOpen}></ToggleButton>
        </motion.div>
    )
}

export default Sidebar;