import "./Navbar.scss"
import { motion, useScroll, useMotionValueEvent, useMotionValue, useTransform, animate } from "framer-motion";
import { useState, useEffect } from "react";
import CursorBlinker from "./CursorBlinker/CursorBlinker";

const Navbar = ({ portfolioRef }) => {

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

    const scrollToPortfolio = () => {
        if (portfolioRef.current) {
            portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const hoverVariant = {
        "hover": {
            scale: 1.2,
            transition: { duration: 0.2 },
        }
    }

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
            variants={{
                visible: {
                    backgroundColor: "#FF573335"
                },
                hidden: {
                    backgroundColor: "#00000000"
                }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className="wrapper">
                <div className="navbarLeft">
                    <motion.span
                        className="motion-span"
                    >
                        &lt;{displayNameValue}/&gt;
                    </motion.span>

                </div>
                <div className="navbarMiddle">
                    <div className="links">
                        <motion.a href="#" variants={hoverVariant} whileHover="hover">Home</motion.a>
                        <motion.a href="#About" variants={hoverVariant} whileHover="hover">About</motion.a>
                        <motion.a href="#Skills" variants={hoverVariant} whileHover="hover">Skills</motion.a>
                        <motion.a href="#Experience" variants={hoverVariant} whileHover="hover">Experience</motion.a>
                        <motion.a variants={hoverVariant} whileHover="hover" onClick={scrollToPortfolio}>Projects</motion.a>
                    </div>
                </div>
                <div className="navbarRight"></div>
            </div>
        </motion.div>
    )
}

export default Navbar;