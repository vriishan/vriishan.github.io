import { motion } from "framer-motion";
import './CursorBlinker.scss';
import { useState, useEffect } from "react";

export default function CursorBlinker() {

    const [isBlinking, setIsBlinking] = useState(true);

    const cursorVariants = {
        blinking: {
            opacity: [0, 0, 1, 1],
            transition: {
                duration: 1,
                repeat: Infinity,
                repeatDelay: 0,
                ease: "linear",
                times: [0, 0.5, 0.5, 1]
            }
        },
        still: {
            opacity: 0,
        },
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsBlinking(false);
        }, 7000); // Change this to the desired duration in milliseconds

        return () => clearTimeout(timer);
    }, []);


    return (
        <motion.div
            animate={isBlinking ? "blinking" : "still"}
            variants={cursorVariants}
            className="blinker"
        />
    );
}
