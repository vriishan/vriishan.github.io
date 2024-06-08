import React from 'react'
import { motion } from 'framer-motion'

const Links = ({ portfolioRef, heroRef, aboutRef, skillsRef, experienceRef, contactRef }) => {

    const variants = {
        open: {
            transition: {
                staggerChildren: 0.1
            }
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    };

    const itemVariants = {
        open: {
            y: 0,
            opacity: 1
        },
        closed: {
            y: 50,
            opacity: 0
        }
    }

    const items = [
        "Home",
        "About",
        "Skills",
        "Experience",
        "Projects",
        "Contact"
    ]

    const refs = [
        heroRef, 
        aboutRef,
        skillsRef,
        experienceRef,
        portfolioRef, 
        contactRef
    ]

    const scrollToSection = (ref, e) => {
        e.preventDefault();
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.div className="links" variants={variants}>{items.map((item, index) => {
                return (
                    <motion.a 
                        key={item} 
                        variants={itemVariants} 
                        whileHover={{scale: 1.1}} 
                        whileTap={{scale: 0.9}}
                        onClick={(e) => scrollToSection(refs[index], e)}
                    >
                        {item}
                    </motion.a>
                )
            })}
        </motion.div>
    );
}

export default Links;