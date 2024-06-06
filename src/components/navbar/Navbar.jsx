import "./Navbar.scss"
import { motion, useScroll, useMotionValueEvent, useMotionValue, useTransform, animate } from "framer-motion";
import { useState, useEffect } from "react";
import CursorBlinker from "./CursorBlinker/CursorBlinker";
import downloadLogo from '/download.svg'

const Navbar = ({ portfolioRef, heroRef, aboutRef, skillsRef, experienceRef, contactRef }) => {

    const name = "Vrushab"
    const count = useMotionValue(0);

    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayName = useTransform(rounded, (latest) =>
        name.slice(0, latest)
    );

    const [displayNameValue, setDisplayNameValue] = useState('');

    useEffect(() => {
        const controls = animate(count, name.length, {
            type: "tween", // Not really needed because adding a duration will force "tween"
            delay: 2,
            duration: 2,
            ease: "easeInOut",
        });
        return controls.stop;
    }, []);

    useEffect(() => {
        displayName.onChange((latest) => setDisplayNameValue(latest));
    }, [displayName]);

    const scrollToSection = (ref, e) => {
        e.preventDefault();
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const hoverVariant = {
        "hover": {
            scale: 1.2,
            color: "var(--accent)",
            transition: { duration: 0.2 },
        },
        "hoverButton": {
            scale: 1.1,
            color: "var(--accent)",
            transition: { duration: 0.2 },
        }
    }

    const [hidden, setHidden] = useState(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    })

    return (
        <motion.div
            className="navbar"
            variants={{
                visible: {
                    opacity: 1,
                    y: 0,
                    backgroundColor: "rgba(17, 17, 17, 0.5)",
                    backdropFilter: "blur(5px)", // Apply blur effect
                    WebkitBackdropFilter: "blur(5px)"
                },
                hidden: {
                    opacity: 0,
                    y: -100,
                    backgroundColor: "#000000"
                }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className="wrapper">
                <div className="navbarLeft">
                    <span>
                        &lt;
                    </span>
                    <motion.span
                        className="motion-span"
                    >
                        {displayNameValue}<CursorBlinker /><font>/</font>
                    </motion.span>
                    <span>
                        &gt;
                    </span>
                </div>
                <div className="navbarMiddle">
                    <div className="links">
                        <motion.a href="#" variants={hoverVariant} whileHover="hover" onClick={(e) => scrollToSection(heroRef, e)}>home</motion.a>
                        <motion.a href="#" variants={hoverVariant} whileHover="hover" onClick={(e) => scrollToSection(aboutRef, e)}>about</motion.a>
                        <motion.a href="#" variants={hoverVariant} whileHover="hover" onClick={(e) => scrollToSection(skillsRef, e)}>skills</motion.a>
                        <motion.a href="#" variants={hoverVariant} whileHover="hover" onClick={(e) => scrollToSection(experienceRef, e)}>experience</motion.a>
                        <motion.a href="#" variants={hoverVariant} whileHover="hover" onClick={(e) => scrollToSection(portfolioRef, e)}>projects</motion.a>
                    </div>
                </div>
                <div className="navbarRight">
                    <a href="https://drive.google.com/file/d/1hwh_k0ckXGqQIZdEfk2Ufg1u_NQ3RFnG/view?usp=sharing" download>
                    <motion.button className="resumeButton" variants={hoverVariant} whileHover="hoverButton">My Resume<img src={downloadLogo}/></motion.button>
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default Navbar;