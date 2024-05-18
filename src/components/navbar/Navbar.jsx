import "./Navbar.scss"
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar></Sidebar>
            <div className="wrapper">
                <motion.span
                    className="motion-span"
                    initial={{opacity: 0, scale: 0.5}} 
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 1}}
                >
                    Vrushab Shandilya
                </motion.span>
                <div className="social">
                    <a href="#"><img src="./linkedin.png" alt="" /></a>
                    <a href="#"><img src="./instagram.png" alt="" /></a>
                    <a href="#"><img src="./youtube.png" alt="" /></a>
                    <a href="#"><img src="./email.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;